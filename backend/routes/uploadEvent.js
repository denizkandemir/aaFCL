const express = require("express");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("cloudinary").v2;
const multer = require("multer");
const Event = require("../models/events");
require("dotenv").config();

const router = express.Router();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "events",
    allowed_formats: ["jpg", "png", "jpeg", "JPG", "PNG", "JPEG"],
  },
});

const upload = multer({ storage });

router.put("/:id", upload.array("images"), async (req, res) => {
  try {
    // Safe JSON parsing
    let deletedIds = [];
    let JsonEvent = { imgs: [] };
    let parsedTexts = [];

    try {
      deletedIds = JSON.parse(req.body.deletedImages || "[]");
    } catch (err) {
      console.warn("Invalid deletedImages JSON:", req.body.deletedImages);
    }

    try {
      JsonEvent = JSON.parse(req.body.event || '{"imgs": []}');
    } catch (err) {
      console.warn("Invalid event JSON:", req.body.event);
    }

    try {
      parsedTexts = JSON.parse(req.body.texts || "[]");
    } catch (err) {
      console.warn("Invalid texts JSON:", req.body.texts);
    }

    // Delete images from Cloudinary
    for (const public_id of deletedIds) {
      try {
        await cloudinary.uploader.destroy(public_id, {
          invalidate: true,
          resource_type: "image",
        });
        JsonEvent.imgs = JsonEvent.imgs.filter(img => img.public_id !== public_id);
      } catch (err) {
        console.error(`Failed to delete ${public_id} from Cloudinary:`, err);
      }
    }

    // New image uploads
    const newImageUrls = req.files.map(file => ({
      url: file.path,
      public_id: file.filename,
    }));

    const keptImages = JsonEvent.imgs || [];
    const allImages = [...keptImages, ...newImageUrls];

    const updatedEvent = await Event.findByIdAndUpdate(
      req.params.id,
      {
        title: req.body.title,
        path: req.body.path,
        texts: parsedTexts,
        imgs: allImages,
      },
      { new: true }
    );

    if (!updatedEvent) {
      return res.status(404).json({ message: "Event not found" });
    }

    res.json({ message: "Event updated successfully", updatedEvent });
  } catch (error) {
    console.error("Update event error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

module.exports = router;
