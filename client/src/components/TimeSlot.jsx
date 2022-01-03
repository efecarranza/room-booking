import React from 'react';

const TimeSlot = (props) => {
  async function bookRoom(roomId, timeSlot) {
      try {
          await props.bookingContract.bookRoom(roomId, timeSlot);
      } catch (error) {
          console.log(error);
      }
   }

  async function cancelBooking(roomId, timeSlot) {
    const bookingId = props.roomId + "-" + props.timeSlot;
    try {
      await props.bookingContract.cancelBooking(bookingId);
    } catch (error) {
      console.log(error);
    }
  }

  function addCancelButton(bookingId) {
    if (props.available || props.address !== props.requesterAddress) {
      return;
    }

    return (
      <button className="cancel-booking" value="{props.roomId}-{props.timeSlot}" onClick={() => cancelBooking(props.roomId, props.timeSlot)}>
        Cancel Booking
      </button>
    );
  }

  return (
    <>
    <button value="{props.roomId}-{props.timeSlot}" onClick={() => bookRoom(props.roomId, props.timeSlot)} disabled={!props.available}>
      {props.timeSlot}:00
    </button>
    {addCancelButton()}
    </>
  );
};

export default TimeSlot;
