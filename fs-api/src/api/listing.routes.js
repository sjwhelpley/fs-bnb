const express = require('express');
const router = express.Router();

const ListingService = require('./services/listing.service');
const listingService = new ListingService();

router.get("/", (req, res) => {
    listingService.getAll().then(result => {
          res.send(result);
      })
      .catch(err => {
        res.status(400).json({ msg: err.message });
      });
  });
  
  router.get("/:id", (req, res) => {
    listingService.getById(req.body).then(result => {
        res.send(result);
      })
      .catch(err => {
        res.status(400).json({ msg: err.message });
      });
  });
  
  router.post("/", (req, res) => {
    listingService.create(req.body).then(result => {
      res.send(result);
    })
    .catch(err => {
      res.status(400).json({ msg: err.message });
    });
  });
  
  router.post("/update/:id", (req, res) => {
    listingService.update(req.body).then(result => {
      res.send(result);
    })
    .catch(err => {
      res.status(400).json({ msg: err.message });
    });
  });
  
  router.get("/delete/:id", (req, res) => {
    listingService.delete(req.body).then(result => {
      res.send(result);
    })
    .catch(err => {
      res.status(400).json({ msg: err.message });
    });
  });
  
  module.exports = router;