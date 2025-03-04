const express = require("express");
const Event = require("../models/events"); 
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const events = await Event.find(); 
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

module.exports = router;
