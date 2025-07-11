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
    allowed_formats: ["jpg", "png", "jpeg" , "JPG", "PNG" , "JPEG"],
  },
});

const upload = multer({ storage });
router.post("/", upload.array("images"), async (req, res) => {
  try {
    console.log("REQ BODY:", req.body);
    console.log("REQ FILES:", req.files);

    const { title, texts, path } = req.body;

    if (!title || !texts || !path) {
      return res.status(400).json({ message: "Eksik alanlar." });
    }

    const imageInfos = req.files.map((file) => ({
      url: file.path,
      public_id: file.filename,
    }));

    const newEvent = new Event({
      title,
      texts: JSON.parse(texts),
      path,
      imgs: imageInfos,
    });

    await newEvent.save();

    res.json({ message: "Event created successfully!", newEvent });
  } catch (error) {
    console.error("Backend Error:", error.stack || error.message || error);
    res.status(500).json({
      message: "Error uploading event",
      error: error.stack || error.message || error,
    });
  }
});


module.exports = router;
