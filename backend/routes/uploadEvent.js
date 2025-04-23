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
    const { title, texts , path } = req.body; 

    const imageInfos = req.files.map((file) => ({
      url: file.path,
      public_id: file.filename, 
    }));
    
    const newEvent = new Event({
      title: title,
      texts: JSON.parse(texts), 
      path: path,
      imgs: imageInfos,
    });
    
    console.log("Uploaded files:", req.files);

    await newEvent.save(); 

    res.json({ message: "Event created successfully!", newEvent });
  } catch (error) {
    res.status(500).json({ message: "Error uploading event", error });
  }
});

router.put("/:id", upload.array("images"), async (req, res) => {
  try {
    const { title, texts, oldImages, deletedImages  } = req.body;

    const deletedIds = JSON.parse(deletedImages || "[]");
    for (const public_id of deletedIds) {
      await cloudinary.uploader.destroy(public_id);  
    }

    const newImageUrls = req.files.map((file) => ({
      url: file.path,
      public_id: file.filename,  
    }));

    const keptImages = JSON.parse(oldImages || "[]");
    const allImages = [...keptImages, ...newImageUrls];

    console.log(allImages)
    const updatedEvent = await Event.findByIdAndUpdate(
      req.params.id,
      {
        title,
        texts: JSON.parse(texts),
        imgs: allImages,  
      },
      { new: true }
    );

    if (!updatedEvent) {
      return res.status(404).json({ message: "Event not found" });
    }

    res.json({ message: "Event updated successfully", updatedEvent });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error });
  }
});


module.exports = router;
