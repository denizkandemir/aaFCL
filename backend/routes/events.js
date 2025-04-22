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

router.delete('/:id', async (req, res) => {
  try {
      const { id } = req.params;
      await Event.findByIdAndDelete(id);
      res.status(200).json({ message: "Event deleted successfully" });
  } catch (error) {
      res.status(500).json({ error: "Failed to delete event" });
  }
});

module.exports = router;
