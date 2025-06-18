const express = require("express");
const router = express.Router();
const authenticate = require("../middleware/authenticate");

router.get("/", authenticate, (req, res) => {
  res.json({ message: "Admin panel erişimi başarılı", user: req.user });
});

module.exports = router;
