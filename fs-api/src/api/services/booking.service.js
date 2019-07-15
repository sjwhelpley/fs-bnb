var Booking = require("../models/booking.model");

module.exports = class BookingService {
    constructor() { }

    getAll() { 
        return new Promise((resolve, reject) => {
            Booking.getAll((err, res) => {
                if(err) reject(err);
                resolve(res);
            });
        });
    }

    getById(id) {
        return new Promise((resolve, reject) => {
            Booking.getById(id, (err, res) => {
                if(err) reject(err);
                resolve(res);
            });
        });
    }

    create(newBooking) { 
        return new Promise((resolve, reject) => {
            Booking.create(newBooking, (err, res) => {
                if(err) reject(err);
                resolve(res);
            });
        });
    }

    update(id) { 
        return new Promise((resolve, reject) => {
            Booking.update(id, (err, res) => {
                if(err) reject(err);
                resolve(res);
            });
        });
    }

    delete(id) { 
        return new Promise((resolve, reject) => {
            Booking.delete(id, (err, res) => {
                if(err) reject(err);
                resolve(res);
            });
        });
    }
}