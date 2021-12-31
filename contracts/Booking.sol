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

    address private owner = msg.sender;
    string[20] public rooms = ['C01'];
    string[24] public availableTimes = ['00'];
    mapping(string => BookingInfo) public bookings;

    constructor() {

    }

    function listRooms() public view returns (string[20] memory) {
        return rooms;
    }

    function bookRoom(string memory _room, string memory _timeSlot) public {
        string memory _bookingId = string(bytes.concat(bytes(_room), "-", bytes(_timeSlot)));
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

    function checkAvailability(string memory _bookingId) public view returns (bool) {
        return bookings[_bookingId].isBooked;
    }
}
