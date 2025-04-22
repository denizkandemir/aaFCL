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
    allowed_formats: ["jpg", "png", "jpeg"],
  },
});

const upload = multer({ storage });

router.post("/", upload.array("images"), async (req, res) => {
  try {
    const { title, texts } = req.body; 
    const imageUrls = req.files.map((file) => file.path); 

    console.log("Uploaded files:", req.files);  
    console.log("Request body:", req.body);

    const newEvent = new Event({
      title,
      texts: JSON.parse(texts), 
      imgs: imageUrls, 
    });

    console.log("Uploaded files:", req.files);

    await newEvent.save(); 

    res.json({ message: "Event created successfully!", newEvent });
  } catch (error) {
    res.status(500).json({ message: "Error uploading event", error });
  }
});

module.exports = router;
