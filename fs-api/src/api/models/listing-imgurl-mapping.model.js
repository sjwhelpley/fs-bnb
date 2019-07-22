var mysqlConn = require("../../database/database");

module.exports = class ListingImgUrl {
    constructor(id_listing, imgUrl) {
        this.id;
        this.id_listing = id_listing;
        this.imgUrl = imgUrl;
    }

    getAll(result) {
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
    
    getByListingId(id, result) {
        mysqlConn.query("SELECT imgUrl FROM listingImgUrl WHERE id_listing = ? ", id, function(err, res) {
            if (err) {
                console.log("error: ", err);
                result(err, null);
            } else {
                result(null, res);
            }
        });
    }
    
    create(newListingImgUrl, result) {
        mysqlConn.query("INSERT INTO listingImgUrl set ?", newListingImgUrl, function(err, res) {
            if (err) {
                console.log("error: ", err);
                result(err, null);
            } else {
                result(null, res);
            }
        });
    }
    
    update(id, listingImgUrl, result) {
        mysqlConn.query("UPDATE listingImgUrl SET listingImgUrl = ? WHERE id = ?", [listingImgUrl, id], function(err, res) {
            if (err) {
                console.log("error: ", err);
                result(null, err);
            } else {
                result(null, res);
            }
        });
    }
    
    delete (id, result) {
        mysqlConn.query("DELETE FROM listingImgUrl WHERE id = ?", id, function(err, res) {
            if (err) {
                console.log("error: ", err);
                result(null, err);
            } else {
                result(null, res);
            }
        });
    }
}









