const express = require('express');
const router = express.Router();

const UserService = require('./services/user.service');
const userService = new UserService();

router.get("/", (req, res) => {
  userService.getAll().then(result => {
        res.send(result);
    })
    .catch(err => {
      res.status(400).json({ msg: err.message });
    });
});

router.get("/:id", (req, res) => {
  userService.getById(req.body).then(result => {
      res.send(result);
    })
    .catch(err => {
      res.status(400).json({ msg: err.message });
    });
});

router.post("/", (req, res) => {
  userService.create(req.body).then(result => {
    res.send(result);
  })
  .catch(err => {
    res.status(400).json({ msg: err.message });
  });
});

router.post("/update/:id", (req, res) => {
  userService.update(req.body).then(result => {
    res.send(result);
  })
  .catch(err => {
    res.status(400).json({ msg: err.message });
  });
});

router.get("/delete/:id", (req, res) => {
  userService.delete(req.body).then(result => {
    res.send(result);
  })
  .catch(err => {
    res.status(400).json({ msg: err.message });
  });
});

module.exports = router;