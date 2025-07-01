const mongoose = require("mongoose");
require("dotenv").config();

const https = require("https");
  https.get("https://api.ipify.org?format=json", (res) => {
    let data = "";
    res.on("data", (chunk) => (data += chunk));
    res.on("end", () => {
      console.log("📡 Render server public IP:", JSON.parse(data).ip);
    });
  })
  .on("error", (err) => {
    console.error("Error fetching IP:", err);
  });

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {});
    console.log("MongoDB Connected...");
  } catch (err) {
    console.error("MongoDB Connection Error:", err);
    process.exit(1);
  }
};

module.exports = connectDB;
