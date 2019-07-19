const express = require('express');
const router = express.Router();

const User = require('./models/user.model');

router.get("/", (req, res) => {
    User.prototype.getAllUsers((err, result) => {
        if(err) res.status(400).json({ msg: err.message });
        res.send(result);
    });
});

router.get("/:id", (req, res) => {
    User.prototype.getUserById(req.params.id, (err, result) => {
        if(err) res.status(400).json({ msg: err.message });
        res.send(result);
    });
});

router.post("/", (req, res) => {
    User.prototype.createUser(req.body, (err, result) => {
        if(err) res.status(400).json({ msg: err.message });
        res.send(result);
    });
});

router.post("/update/:id", (req, res) => {
    User.prototype.updateUser(req.params.id, req.body, (err, result) => {
        if(err) res.status(400).json({ msg: err.message });
        res.send(result);
    });
});

router.get("/delete/:id", (req, res) => {
    User.prototype.deleteUser(req.params.id, (err, result) => {
        if(err) res.status(400).json({ msg: err.message });
        res.send(result);
    });
});

module.exports = router;