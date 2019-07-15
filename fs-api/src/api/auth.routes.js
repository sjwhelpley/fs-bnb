const express = require("express");
const router = express.Router();

const AuthService = require("./services/auth.service");
const authService = new AuthService();

router.post("/login", (req, res) => {
  authService.login(req.body).then(result => {
    res.send(result);
  })
  .catch(err => {
    res.status(400).json({ msg: err.message });
  });
});

router.get("/validate", (req, res) => {
  authService.validateEmail(req.body).then(result => {
    res.send(result);
  })
  .catch(err => {
    res.status(400).json({ msg: err.message });
  });
});

module.exports = router;