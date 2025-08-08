const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
require("dotenv").config();
const cookieParser = require("cookie-parser");

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

// Enable CORS for your frontend
const allowedOrigins = [
  "http://localhost:5173", 
  "http://localhost:3000", 
  "https://suaafcl.com",
  "https://www.suaafcl.com",
];

app.use(cors({
  origin(origin, cb){ if(!origin) return cb(null,true); cb(null, allowedOrigins.includes(origin)); },
  credentials: true,
  methods: ["GET","POST","PUT","DELETE","PATCH","OPTIONS"],
  allowedHeaders: ["Content-Type","Authorization"]
}));

app.use(cookieParser());

// Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/events", require("./routes/events"));
app.use("/api/uploadEvent", require("./routes/uploadEvent"));
app.use("/api/addEvent", require("./routes/addEvent"));
app.use("/api/admin", require("./routes/admin"));

// Server Listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
