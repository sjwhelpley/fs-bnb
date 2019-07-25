var mysqlConn = require("../../database/database");

module.exports = class ListingImgUrl {
    constructor(id_listing, imgUrl) {
        this.id;
        this.id_listing = id_listing;
        this.imgUrl = imgUrl;
    }

    getAll(result) {
        mysqlConn.query("SELECT * FROM listing_imgurl_mapping", function(err, res) {
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
        mysqlConn.query("SELECT imgUrl FROM listing_imgurl_mapping WHERE id_listing = ? ", id, function(err, res) {
            if (err) {
                console.log("error: ", err);
                result(err, null);
            } else {
                result(null, res);
            }
        });
    }
    
    create(newListingImgUrl, result) {
        mysqlConn.query("INSERT INTO listing_imgurl_mapping set ?", newListingImgUrl, function(err, res) {
            if (err) {
                console.log("error: ", err);
                result(err, null);
            } else {
                result(null, res);
            }
        });
    }
    
    update(id, listingImgUrl, result) {
        mysqlConn.query("UPDATE listing_imgurl_mapping SET listing_imgurl_mapping = ? WHERE id = ?", [listingImgUrl, id], function(err, res) {
            if (err) {
                console.log("error: ", err);
                result(null, err);
            } else {
                result(null, res);
            }
        });
    }
    
    delete(id, result) {
        mysqlConn.query("DELETE FROM listing_imgurl_mapping WHERE id_listing = ?", id, function(err, res) {
            if (err) {
                console.log("error: ", err);
                result(null, err);
            } else {
                result(null, res);
            }
        });
    }
}









