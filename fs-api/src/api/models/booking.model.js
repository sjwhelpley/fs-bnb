var mysqlConn = require("../../database/database");

var Booking = function(booking) {
    this.id;
    this.numPeople = booking.numPeople;
    this.totalCost = booking.cost;
    this.startDate = booking.startDate;
    this.endDate = booking.endDate;
    this.id_listing = booking.id_listing;
    this.id_consumer = booking.id_consumer;
}

Booking.getAll() = function(result) {
    mysqlConn.query("SELECT * FROM booking", function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log("Bookings : ", res);
            result(null, res);
        }
    });
}

Booking.getById() = function(id, result) {
    mysqlConn.query("SELECT * FROM booking WHERE id = ? ", id, function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
}

Booking.create() = function(newBooking, result) {
    mysqlConn.query("INSERT INTO booking set ?", newBooking, function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res);
        }
    });      
}

Booking.update() = function(id, booking, result) {
    mysqlConn.query("UPDATE booking SET booking = ? WHERE id = ?", [booking, id], function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
}

Booking.delete() = function(id, result) {
    mysqlConn.query("DELETE FROM booking WHERE id = ?", id, function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
}