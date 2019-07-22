var mysqlConn = require("../../database/database");

module.exports = class Listing {
    constructor(homeType, address, maxNumPeople, title, summary, pricePerNight) {
        this.id;
        this.homeType = homeType;
        this.address = address;
        this.maxNumPeople = maxNumPeople;
        this.title = title;
        this.summary = summary;
        this.pricePerNight = pricePerNight;
        this.id_provider;
    }
    
    getAll(result) {
        mysqlConn.query("SELECT * FROM listing", function(err, res) {
            if (err) {
                result(err, null);
            } else {
                result(null, res);
            }
        });
    }

    getById(id, result) {
        mysqlConn.query("SELECT * FROM listing WHERE id = ?", id, function(err, res) {
            if (err) {
                result(err, null);
            } else {
                result(null, res);
            }
        });
    }

    create(newListing, result) {
        mysqlConn.query("INSERT INTO listing set ?", newListing, function(err, res) {
            if (err) {
                result(err, null);
            } else {
                result(null, res);
            }
        });      
    }

    update(id, listing, result) {
        mysqlConn.query("UPDATE listing SET listing = ? WHERE id = ?", [listing, id], function(err, res) {
            if (err) {
                result(err, null);
            } else {
                result(null, res);
            }
        });
    }

    delete(id, result) {
        mysqlConn.query("DELETE FROM listing WHERE id = ?", id, function(err, res) {
            if (err) {
                result(err, null);
            } else {
                result(null, res);
            }
        });
    }
}

