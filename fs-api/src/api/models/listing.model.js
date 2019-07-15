var mysqlConn = require("../../database/database");

var Listing = function(listing) {
    this.id;
    this.homeType = listing.homeType;
    this.roomType = listing.roomType;
    this.address = listing.address;
    this.maxNumPeople = listing.maxNumPeople;
    this.title = listing.title;
    this.summary = listing.summary;
    this.pricePerNight = listing.pricePerNight;
    this.imageUrl = listing.imageUrl;
    this.id_provider = listing.id_provider;
}

Listing.getAll() = function(result) {
    mysqlConn.query("SELECT * FROM listing", function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log("Listings : ", res);
            result(null, res);
        }
    });
}

Listing.getById() = function(id, result) {
    mysqlConn.query("SELECT * FROM listing WHERE id = ? ", id, function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
}

Listing.create() = function(newListing, result) {
    mysqlConn.query("INSERT INTO listing set ?", newListing, function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res);
        }
    });      
}

Listing.update() = function(id, listing, result) {
    mysqlConn.query("UPDATE listing SET listing = ? WHERE id = ?", [listing, id], function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
}

Listing.delete() = function(id, result) {
    mysqlConn.query("DELETE FROM listing WHERE id = ?", id, function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
}