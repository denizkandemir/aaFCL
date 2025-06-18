const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  id: Number,
  path: { type: String, required: true },
  title: { type: String, required: true },
  texts: { type: [String], required: true },
  imgs: [
    {
      url: { type: String, required: true },
      public_id: { type: String, required: true },
    }
  ]});

module.exports = mongoose.model("Event", EventSchema);
