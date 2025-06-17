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

router.put("/:id", upload.array("images"), async (req, res) => {
  try {
    const { title, event, texts, oldImages, deletedImages } = req.body;

    const deletedIds = JSON.parse(deletedImages || "[]");
    const JsonEvent = JSON.parse(event);

    for (const public_id of deletedIds) {
      try {
        const result = await cloudinary.uploader.destroy(`${public_id}`, {
          invalidate: true,
          resource_type: "image",
        });
        console.log(`Deleted from Cloudinary: ${public_id}`, result);

        const imageIndex = JsonEvent.imgs.findIndex(
          (img) => img.public_id === public_id
        );

        if (imageIndex !== -1) {
          JsonEvent.imgs.splice(imageIndex, 1);
          console.log(`Removed image with public_id: ${public_id}`);
          console.log("Updated images array:", event.imgs);
        } else {
          console.log(`Image not found with public_id: ${public_id}`);
        }
      } catch (error) {
        console.error(`Failed to delete ${public_id} from Cloudinary:`, error);
      }
    }
    
    const newImageUrls = req.files.map((file) => ({
      url: file.path,
      public_id: file.filename,
    }));

    const keptImages = JsonEvent.imgs;
    const allImages = [...keptImages, ...newImageUrls];

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
