const express = require('express');
const router = express.Router();

const Listing = require("./models/listing.model");
const ListingImgUrl = require ("./models/listing-imgurl-mapping.model");

router.get("/", (req, res) => {
  Listing.prototype.getAll((err, result) => {
    if(err) res.status(400).json({ msg: err.message });
    else res.send(result);
  });
});
  
router.get("/:id", (req, res) => {
  Listing.prototype.getById(req.params.id, (err, result) => {
      if(err) res.status(400).json({ msg: err.message });
      else res.send(result);
    });
});

router.get("/img/:id", (req, res) => {
  ListingImgUrl.prototype.getByListingId(req.params.id, (err, result) => {
      if(err) res.status(400).json({ msg: err.message });
      else res.send(result);
    });
});

router.post("/", (req, res) => {
  Listing.prototype.create(req.body, (err, result) => {
    if(err) res.status(400).json({ msg: err.message });
    else res.send(result);
  });
});

router.patch("/update/:id", (req, res) => {
  Listing.prototype.update(req.params.id, req.body, (err, result) => {
    if(err) res.status(400).json({ msg: err.message });
    else res.send(result);
  });
});

router.delete("/delete/:id", (req, res) => {
  Listing.prototype.delete(req.params.id, (err, result) => {
    if(err) res.status(400).json({ msg: err.message });
    else res.send(result);
  });
});

router.delete("/delete/img/:id", (req, res) => {
  ListingImgUrl.prototype.delete(req.params.id, (err, result) => {
    if(err) res.status(400).json({ msg: err.message });
    else res.send(result);
  });
});

module.exports = router;