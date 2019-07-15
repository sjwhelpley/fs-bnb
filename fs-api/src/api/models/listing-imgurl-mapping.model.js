var mysqlConn = require("../../database/database");

var ListingImgUrl = function(listingImgUrl) {
    this.id;
    this.id_listing = listingImgUrl.id_listing;
    this.imgUrl = listingImgUrl.imgUrl;
}

ListingImgUrl.getAll() = function(result) {
    mysqlConn.query("SELECT * FROM listingImgUrl", function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log("ListingImgUrls : ", res);
            result(null, res);
        }
    });
}

ListingImgUrl.getById() = function(id, result) {
    mysqlConn.query("SELECT * FROM listingImgUrl WHERE id = ? ", id, function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
}

ListingImgUrl.create() = function(newListingImgUrl, result) {
    mysqlConn.query("INSERT INTO listingImgUrl set ?", newListingImgUrl, function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
}

ListingImgUrl.update() = function(id, listingImgUrl, result) {
    mysqlConn.query("UPDATE listingImgUrl SET listingImgUrl = ? WHERE id = ?", [listingImgUrl, id], function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
}

ListingImgUrl.delete() = function(id, result) {
    mysqlConn.query("DELETE FROM listingImgUrl WHERE id = ?", id, function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
}