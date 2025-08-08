// routes/addEvent.js
const express = require("express");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("cloudinary").v2;
const multer = require("multer");
const Event = require("../models/events");
require("dotenv").config();

const router = express.Router();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key:    process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

if (!process.env.CLOUDINARY_CLOUD_NAME || !process.env.CLOUDINARY_API_KEY || !process.env.CLOUDINARY_API_SECRET) {
  console.warn("⚠️ Cloudinary env vars missing. Uploads will fail.");
}

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "events",
    allowed_formats: ["jpg", "png", "jpeg", "JPG", "PNG", "JPEG"],
  },
});
const upload = multer({ storage });

function uploadMiddleware(req, res, next) {
  upload.array("images")(req, res, function (err) {
    if (err) {
      console.error("Multer/Cloudinary error:", err);
      return res.status(500).json({ message: "Upload error", error: String(err) });
    }
    next();
  });
}

router.post("/", uploadMiddleware, async (req, res) => {
  try {
    console.log("addEvent body keys:", Object.keys(req.body));
    console.log("addEvent files count:", (req.files || []).length);

    const rawTitle = req.body.title || "Untitled Event";
    const title = String(rawTitle);
    const path =
      req.body.path ||
      ("/" + title.trim().toLowerCase().replace(/\s+/g, "-"));

    let texts = [];
    try {
      texts = JSON.parse(req.body.texts || "[]");
      if (!Array.isArray(texts)) texts = [];
    } catch (e) {
      console.warn("⚠️ Invalid texts JSON:", req.body.texts);
      texts = [];
    }

    const imgs = (req.files || []).map((f) => ({
      url: f.path,
      public_id: f.filename,
    }));

    const newEvent = new Event({ title, path, texts, imgs });
    await newEvent.save();

    return res.json({ message: "Event added successfully", newEvent });
  } catch (error) {
    console.error("🔥 Add event error:", error);
    return res.status(500).json({ message: "Server error", error: error.message });
  }
});

module.exports = router;
