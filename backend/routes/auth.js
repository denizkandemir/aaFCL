const express = require("express");
const admin = require("../models/admin"); 
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const adminUser = await admin.find(); 
    res.json(adminUser);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

module.exports = router;
