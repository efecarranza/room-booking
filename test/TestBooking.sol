// SPDX-License-Identifier: GPL-3.0

pragma solidity 0.8.11;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/Booking.sol";

contract TestBooking {
    Booking public booking;

    function beforeEach() public {
        booking = Booking(DeployedAddresses.Booking());
    }

    function testItReturnsTheStoredRooms() public {
        string[20] memory expected = ['C01', 'C02', 'C03', 'C04', 'C05', 'C06', 'C07', 'C08', 'C09', 'C10',
            'P01', 'P02', 'P03', 'P04', 'P05', 'P06', 'P07', 'P08', 'P09', 'P10'
        ];

        string[20] memory result = booking.listRooms();

        Assert.equal(result[0], expected[0], "It should return existing rooms.");
        Assert.equal(result[1], expected[1], "It should return existing rooms.");
        Assert.equal(result[2], expected[2], "It should return existing rooms.");
        Assert.equal(result[3], expected[3], "It should return existing rooms.");
        Assert.equal(result[4], expected[4], "It should return existing rooms.");
        Assert.equal(result[5], expected[5], "It should return existing rooms.");
        Assert.equal(result[6], expected[6], "It should return existing rooms.");
        Assert.equal(result[7], expected[7], "It should return existing rooms.");
        Assert.equal(result[8], expected[8], "It should return existing rooms.");
        Assert.equal(result[9], expected[9], "It should return existing rooms.");
        Assert.equal(result[10], expected[10], "It should return existing rooms.");
        Assert.equal(result[11], expected[11], "It should return existing rooms.");
        Assert.equal(result[12], expected[12], "It should return existing rooms.");
    }

    function testItReturnsTheTimes() public {
        string[9] memory expected = ['09', '10', '11', '12', '13', '14', '15', '16', '17'];
        string[9] memory result = booking.listTimes();

        Assert.equal(result[0], expected[0], "It should equal the first time");
    }

    function testItBooksATimeThatsAvailable() public {
        booking.bookRoom('C01', '09');

        (bool isAvailable, ) = booking.checkAvailability('C01-09');
        Assert.isFalse(isAvailable, "Did not return false");
    }

    function testItCancelsBooking() public {
        booking.bookRoom('C01', '10');

        (bool shouldNotBeAvailable, ) = booking.checkAvailability('C01-10');
        Assert.isFalse(shouldNotBeAvailable, "Did not return false");

        booking.cancelBooking('C01-10');

        (bool shouldBeAvailable, ) = booking.checkAvailability('C01-10');
        Assert.isTrue(shouldBeAvailable, "Did not return true");
    }
}
