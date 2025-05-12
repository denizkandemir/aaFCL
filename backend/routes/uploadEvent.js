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
    const { title, texts, path } = req.body;

    const imageInfos = req.files.map((file) => ({
      url: file.path,
      public_id: file.filename.split('/').pop(), 
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
    const { title, texts, oldImages, deletedImages } = req.body;

    const deletedIds = JSON.parse(deletedImages || "[]");
    for (const public_id of deletedIds) {
      try {
        const result = await cloudinary.uploader.destroy(public_id, {
          invalidate: true,
        });
        console.log(`Cloudinary destroy result for ${public_id}:`, result);
        if (result.result !== "ok") {
          console.warn(
            `Cloudinary delete returned unexpected result for ${public_id}:`,
            result
          );
        }
      } catch (error) {
        console.error(`Error deleting ${public_id} from Cloudinary:`, error);
      }
    }

    await Event.findByIdAndUpdate(req.params.id, {
      $pull: { imgs: { public_id: { $in: deletedIds } } },
    });

    console.log(deletedImages);
    console.log("deletedIds : ", deletedIds);

    const newImageUrls = req.files.map((file) => ({
      url: file.path,
      public_id: file.filename,
    }));

    const keptImages = JSON.parse(oldImages || "[]");
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
