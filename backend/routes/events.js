const express = require("express");
const Event = require("../models/events");
const { v2: cloudinary } = require("cloudinary");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const events = await Event.find({}).sort({ createdAt: -1 }).lean();
    res.json(events);
  } catch (err) {
    console.error("🔥 Error in GET /api/events:", err); // full error in Render logs
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const event = await Event.findById(id);

    if (!event) {
      return res.status(404).json({ error: "Event not found" });
    }

    if (event.imgs && Array.isArray(event.imgs)) {
      for (const img of event.imgs) {
        if (img.public_id) {
          await cloudinary.uploader.destroy(img.public_id);
        }
      }
    }

    await Event.findByIdAndDelete(id);

    res.status(200).json({ message: "Event and its images deleted successfully" });

  } catch (error) {
    console.error("Delete error:", error);
    res.status(500).json({ error: "Failed to delete event and/or images" });
  }
});

module.exports = router;
