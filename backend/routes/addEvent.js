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

router.post("/", upload.array("images"), async (req, res) => {
  try {
    const title = req.body.title || "Untitled Event";
    const path = req.body.path || "/" + title.trim().toLowerCase().replace(/\s+/g, "-");

    let parsedTexts = [];
    try {
      parsedTexts = JSON.parse(req.body.texts || "[]");
    } catch (err) {
      console.warn("Invalid texts JSON in addEvent:", req.body.texts);
    }

    const imageUrls = req.files.map(file => ({
      url: file.path,
      public_id: file.filename,
    }));

    const newEvent = new Event({
      title,
      path,
      texts: parsedTexts,
      imgs: imageUrls,
    });

    await newEvent.save();

    res.json({ message: "Event added successfully", newEvent });
  } catch (error) {
    console.error("Add event error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

module.exports = router;
