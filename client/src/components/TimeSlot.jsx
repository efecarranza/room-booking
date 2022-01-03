import React from 'react';

const TimeSlot = (props) => {
	async function getData(roomId, timeSlot) {
		console.log('get data for room and time');
	}

	return (
		<button value="{props.roomId}-{props.timeSlot}" onClick={() => getData(props.roomId, props.timeSlot)} disabled={props.available}>
			{props.timeSlot}:00
		</button>
	);
};

export default TimeSlot;
