const express = require('express');
const router = express.Router();

const ListingService = require('./services/booking.service');
const bookingService = new ListingService();

router.get("/", (req, res) => {
  bookingService.getAll().then(result => {
        res.send(result);
    })
    .catch(err => {
      res.status(400).json({ msg: err.message });
    });
});

router.get("/:id", (req, res) => {
  bookingService.getById(req.body).then(result => {
      res.send(result);
    })
    .catch(err => {
      res.status(400).json({ msg: err.message });
    });
});

router.post("/", (req, res) => {
  bookingService.create(req.body).then(result => {
    res.send(result);
  })
  .catch(err => {
    res.status(400).json({ msg: err.message });
  });
});

router.post("/update/:id", (req, res) => {
  bookingService.update(req.body).then(result => {
    res.send(result);
  })
  .catch(err => {
    res.status(400).json({ msg: err.message });
  });
});

router.get("/delete/:id", (req, res) => {
  bookingService.delete(req.body).then(result => {
    res.send(result);
  })
  .catch(err => {
    res.status(400).json({ msg: err.message });
  });
});

module.exports = router;