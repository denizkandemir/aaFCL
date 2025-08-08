const mongoose = require("mongoose");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}



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
    console.log("🔑 MONGO_URI is:", process.env.MONGO_URI); // Debug
     console.log("🔍 Connected to DB:", mongoose.connection.name);
    console.log("📂 Collections:", await mongoose.connection.db.listCollections().toArray());
    console.log("MongoDB Connected...");
  } catch (err) {
    console.error("MongoDB Connection Error:", err);
    process.exit(1);
  }
};

mongoose.connection.on("connected", async () => {
  const db = mongoose.connection.db;
  console.log("🗄️ Connected DB:", db.databaseName);

  const colls = (await db.listCollections().toArray()).map(c => c.name);
  console.log("📚 Collections:", colls);

  try {
    const count = await db.collection("events").countDocuments();
    console.log("🔢 events count:", count);
  } catch (e) {
    console.error("events count failed:", e.message);
  }
});

module.exports = connectDB;
