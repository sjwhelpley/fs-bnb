var mysqlConn = require("../../database/database");

module.exports = class Booking {
    constructor(numPeople, startDate, endDate, id_listing, id_consumer) {
        this.id;
        this.numPeople = numPeople;
        this.totalCost = totalCost;
        this.startDate = startDate;
        this.endDate = endDate;
        this.id_listing = id_listing;
        this.id_consumer = id_consumer;
    }

    getAll(result) {
        mysqlConn.query("SELECT * FROM booking", function(err, res) {
            if (err) {
                result(err, null);
            } else {
                result(null, res);
            }
        });
    }

    getById(id, result) {
        mysqlConn.query("SELECT * FROM booking WHERE id = ? ", id, function(err, res) {
            if (err) {
                result(err, null);
            } else {
                result(null, res);
            }
        });
    }

    getByUserId(id, result) {
        mysqlConn.query("SELECT * FROM booking WHERE id = ? ", id, function(err, res) {
            if (err) {
                result(err, null);
            } else {
                result(null, res);
            }
        });
    }

    create(newBooking, result) {
        mysqlConn.query("INSERT INTO booking set ?", newBooking, function(err, res) {
            if (err) {
                result(err, null);
            } else {
                result(null, res);
            }
        });      
    }

    update(id, booking, result) {
        mysqlConn.query("UPDATE booking SET booking = ? WHERE id = ?", [booking, id], function(err, res) {
            if (err) {
                result(err, null);
            } else {
                result(null, res);
            }
        });
    }

    delete(id, result) {
        mysqlConn.query("DELETE FROM booking WHERE id = ?", id, function(err, res) {
            if (err) {
                result(err, null);
            } else {
                result(null, res);
            }
        });
    }
}









