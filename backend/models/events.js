const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  id: Number,
  path: String,
  title: String,
  texts: Array, 
});

module.exports = mongoose.model("Event", EventSchema);
