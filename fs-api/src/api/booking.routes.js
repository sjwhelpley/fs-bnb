const express = require('express');
const router = express.Router();

const Booking = require("./models/booking.model");

router.get("/", (req, res) => {
  Booking.prototype.getAll((err, result) => {
    if(err) res.status(400).json({ msg: err.message });
    res.send(result);
  });
});
  
router.get("/:id", (req, res) => {
  Booking.prototype.getById(req.params.id, (err, result) => {
      if(err) res.status(400).json({ msg: err.message });
      res.send(result);
    });
});

router.post("/", (req, res) => {
  Lisitng.prototype.create(req.body, (err, result) => {
    if(err) res.status(400).json({ msg: err.message });
    res.send(result);
  });
});

router.post("/update/:id", (req, res) => {
  Booking.prototype.update(req.body, (err, result) => {
    if(err) res.status(400).json({ msg: err.message });
    res.send(result);
  });
});

router.get("/delete/:id", (req, res) => {
  Booking.prototype.delete(req.body, (err, result) => {
    if(err) res.status(400).json({ msg: err.message });
    res.send(result);
  });
});

module.exports = router;