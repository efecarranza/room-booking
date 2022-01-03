import React from 'react';
import { ethers } from 'ethers';
import { useWeb3 } from "@3rdweb/hooks";

const TimeSlot = (props) => {
  async function bookRoom(roomId, timeSlot) {
      try {
          await props.bookingContract.bookRoom(roomId, timeSlot);
      } catch (error) {
          console.log(error);
      }
   }

  const contractAddress = "0x4820f9A4261aad5dC60153B3d2d53C3628E5909E";
  const { connectWallet, address, error, provider } = useWeb3();

  async function cancelBooking(roomId, timeSlot) {
    const bookingId = props.roomId + "-" + props.timeSlot;
    console.log(bookingId);
    try {
      await props.bookingContract.cancelBooking(bookingId);
    } catch (error) {
      console.log(error);
    }
  }

  function addCancelButton(bookingId) {
    if (props.available || props.address != props.requesterAddress) {
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
