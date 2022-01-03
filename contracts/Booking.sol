// SPDX-License-Identifier: GPL-3.0

pragma solidity 0.8.11;

contract Booking {
    event BookedTimeSlot(address _userBooking, string _bookingId);
    event CanceledBooking(address _userBooking, string _bookingId);

    struct BookingInfo {
        address userBooking;
        string timeSlot;
        string roomId;
        bool isBooked;
    }

    address private owner;
    string[20] public rooms = ['C01', 'C02', 'C03', 'C04', 'C05', 'C06', 'C07', 'C08', 'C09', 'C10',
        'P01', 'P02', 'P03', 'P04', 'P05', 'P06', 'P07', 'P08', 'P09', 'P10'
    ];
    string[9] public availableTimes = ['09', '10', '11', '12', '13', '14', '15', '16', '17'];
    mapping(string => BookingInfo) public bookings;

    constructor() {
        owner = msg.sender;
    }

    function listRooms() public view returns (string[20] memory) {
        return rooms;
    }

    function listTimes() public view returns (string[9] memory) {
        return availableTimes;
    }

    function bookRoom(string memory _room, string memory _timeSlot) public {
        string memory _bookingId = string(bytes.concat(bytes(_room), "-", bytes(_timeSlot)));
        require(bookings[_bookingId].isBooked == false, "Room is already booked for this hour.");
        BookingInfo memory _booking = BookingInfo({
            userBooking: msg.sender,
            timeSlot: _timeSlot,
            roomId: _room,
            isBooked: true
        });
        bookings[_bookingId] = _booking;
        emit BookedTimeSlot(msg.sender, _bookingId);
    }

    function cancelBooking(string memory _bookingId) public {
        BookingInfo storage booking = bookings[_bookingId];
        require(booking.userBooking == msg.sender, 'You are not allowed to cancel this booking.');
        delete bookings[_bookingId];
        emit CanceledBooking(msg.sender, _bookingId);
    }

    function checkAvailability(string memory _bookingId) public view returns (bool, address) {
        return (!bookings[_bookingId].isBooked, bookings[_bookingId].userBooking);
    }
}
