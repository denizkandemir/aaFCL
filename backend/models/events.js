const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  id: Number,
  path: String,
  title: { type: String, required: true },
  texts: { type: [String], required: true },
  imgs: { type: [String], required: true } 
});

module.exports = mongoose.model("Event", EventSchema);
