var Listing = require("../models/listing.model");

module.exports = class ListingService {
    constructor() { }

    getAll() { 
        return new Promise((resolve, reject) => {
            Listing.getAll((err, res) => {
                if(err) reject(err);
                resolve(res);
            });
        });
    }

    getById(id) {
        return new Promise((resolve, reject) => {
            Listing.getById(id, (err, res) => {
                if(err) reject(err);
                resolve(res);
            });
        });
    }

    create(newListing) { 
        return new Promise((resolve, reject) => {
            Listing.create(newListing, (err, res) => {
                if(err) reject(err);
                resolve(res);
            });
        });
    }

    update(id) { 
        return new Promise((resolve, reject) => {
            Listing.update(id, (err, res) => {
                if(err) reject(err);
                resolve(res);
            });
        });
    }

    delete(id) { 
        return new Promise((resolve, reject) => {
            Listing.delete(id, (err, res) => {
                if(err) reject(err);
                resolve(res);
            });
        });
    }
}