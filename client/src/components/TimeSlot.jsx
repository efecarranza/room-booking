import React from 'react';

const TimeSlot = (props) => {
	async function getData(roomId, timeSlot) {
		console.log('get data for room and time');
	}

	function cancelBooking(roomId, timeSlot) {
		const bookingId = "{props.roomId}-{props.timeSlot}"
		console.log('booking cancellation');
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
		<button value="{props.roomId}-{props.timeSlot}" onClick={() => getData(props.roomId, props.timeSlot)} disabled={!props.available}>
			{props.timeSlot}:00
		</button>
		{addCancelButton()}
		</>
	);
};

export default TimeSlot;
