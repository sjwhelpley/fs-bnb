const express = require('express');
const router = express.Router();

const Listing = require("./models/listing.model");

router.get("/", (req, res) => {
  Listing.prototype.getAll((err, result) => {
    if(err) res.status(400).json({ msg: err.message });
    res.send(result);
  });
});
  
router.get("/:id", (req, res) => {
  Listing.prototype.getById(req.params.id, (err, result) => {
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
  Listing.prototype.update(req.body, (err, result) => {
    if(err) res.status(400).json({ msg: err.message });
    res.send(result);
  });
});

router.get("/delete/:id", (req, res) => {
  Listing.prototype.delete(req.body, (err, result) => {
    if(err) res.status(400).json({ msg: err.message });
    res.send(result);
  });
});

module.exports = router;