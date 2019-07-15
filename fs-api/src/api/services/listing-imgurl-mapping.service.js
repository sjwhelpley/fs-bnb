var ListingImgUrl = require("../models/listing-imgurl-mapping.model");

module.exports = class ListingImgUrlService {
    constructor() { }

    getAll() { 
        return new Promise((resolve, reject) => {
            ListingImgUrl.getAll((err, res) => {
                if(err) reject(err);
                resolve(res);
            });
        });
    }

    getById(id) {
        return new Promise((resolve, reject) => {
            ListingImgUrl.getById(id, (err, res) => {
                if(err) reject(err);
                resolve(res);
            });
        });
    }

    create(newListingImgUrl) { 
        return new Promise((resolve, reject) => {
            ListingImgUrl.create(newListingImgUrl, (err, res) => {
                if(err) reject(err);
                resolve(res);
            });
        });
    }

    update(id) { 
        return new Promise((resolve, reject) => {
            ListingImgUrl.update(id, (err, res) => {
                if(err) reject(err);
                resolve(res);
            });
        });
    }

    delete(id) { 
        return new Promise((resolve, reject) => {
            ListingImgUrl.delete(id, (err, res) => {
                if(err) reject(err);
                resolve(res);
            });
        });
    }
}