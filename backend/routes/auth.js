const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Admin = require("../models/admin");
const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET || "67531e047121d583dbfbc0b14ff98b4fc990ba17accde91343e05833690e3ee"; 

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  if (!password) {
    return res.status(400).json({ message: "Password is required" });
  }

  try {
    const adminUser = await Admin.findOne({ username });

    if (!adminUser) {
      return res.status(404).json({ message: "Kullanıcı bulunamadı" });
    }

    const passwordMatch = await bcrypt.compare(password, adminUser.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: "Yanlış şifre" });
    }

    const token = jwt.sign(
      { id: adminUser._id, username: adminUser.username },
      JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: true, 
      sameSite: "Strict",
      maxAge: 24 * 60 * 60 * 1000, 
    });

    res.json({ message: "Giriş başarılı" });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error" });
  }

  router.post("/logout", (req, res) => {
    res.clearCookie("token", {
      httpOnly: true,
      secure: true, 
      sameSite: "Strict",
    });
    res.json({ message: "Çıkış başarılı" });
  });
  
});

module.exports = router;
