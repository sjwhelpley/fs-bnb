const express = require("express");
const router = express.Router();

const AuthService = require("./services/auth.service");
const authService = new AuthService();

router.post("/login/user", (req, res) => {
  authService.loginUser(req.body).then(result => {
    res.send(result);
  })
  .catch(err => {
    res.status(400).send(err);
  });
});

router.post("/login/provider", (req, res) => {
  authService.loginProvider(req.body).then(result => {
    res.send(result);
  })
  .catch(err => {
    res.status(400).send(err);
  });
});

router.post("/login/admin", (req, res) => {
  authService.loginAdmin(req.body).then(result => {
    res.send(result);
  })
  .catch(err => {
    res.status(400).send(err);
  });
});

router.post("/register/user", (req, res) => {
  authService.registerUser(req.body).then(result => {
    res.send(result);
  })
  .catch(err => {
    res.sendStatus(400).send(err);
  });
});

router.post("/register/provider", (req, res) => {
  authService.registerProvider(req.body).then(result => {
    res.send(result);
  })
  .catch(err => {
    res.sendStatus(400).send(err);
  });
});

module.exports = router;