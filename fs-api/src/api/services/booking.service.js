var Booking = require("../models/booking.model");

module.exports = class BookingService {
    constructor() { }

    getAll() { 
        return new Promise((resolve, reject) => {
            Booking.prototype.getAll((err, res) => {
                if(err) reject(err);
                resolve(res);
            });
        });
    }

    getById(id) {
        return new Promise((resolve, reject) => {
            Booking.prototype.getById(id, (err, res) => {
                if(err) reject(err);
                resolve(res);
            });
        });
    }

    getByUserId(id) {
        return new Promise((resolve, reject) => {
            Booking.prototype.getByUserId(id, (err, res) => {
                if(err) reject(err);
                resolve(res);
            });
        });
    }

    create(newBooking) { 
        return new Promise((resolve, reject) => {
            Booking.prototpye.create(newBooking, (err, res) => {
                if(err) reject(err);
                resolve(res);
            });
        });
    }

    update(id) { 
        return new Promise((resolve, reject) => {
            Booking.prototype.update(id, (err, res) => {
                if(err) reject(err);
                resolve(res);
            });
        });
    }

    delete(id) { 
        return new Promise((resolve, reject) => {
            Booking.prototype.delete(id, (err, res) => {
                if(err) reject(err);
                resolve(res);
            });
        });
    }
}