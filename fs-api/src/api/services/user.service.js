var User = require("../models/user.model");

module.exports = class UserService {
    constructor() { }

    getAll() { 
        return new Promise((resolve, reject) => {
            User.getAll((err, res) => {
                if(err) reject(err);
                resolve(res);
            });
        });
    }

    getById(id) {
        return new Promise((resolve, reject) => {
            User.getById(id, (err, res) => {
                if(err) reject(err);
                resolve(res);
            });
        });
    }

    create(newUser) { 
        return new Promise((resolve, reject) => {
            User.create(newUser, (err, res) => {
                if(err) reject(err);
                resolve(res);
            });
        });
    }

    update(id) { 
        return new Promise((resolve, reject) => {
            User.update(id, (err, res) => {
                if(err) reject(err);
                resolve(res);
            });
        });
    }

    delete(id) { 
        return new Promise((resolve, reject) => {
            User.delete(id, (err, res) => {
                if(err) reject(err);
                resolve(res);
            });
        });
    }
}