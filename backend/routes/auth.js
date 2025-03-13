const express = require("express");
const User = require("../models/admin"); // Ensure correct import
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const adminUser = await User.findOne({ username: "okulfcl"  });
    if (!adminUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(adminUser);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
    console.log(error)
  }
});

module.exports = router;
