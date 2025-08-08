const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Admin = require("../models/admin");
const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET;

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  if (!password) return res.status(400).json({ message: "Password is required" });

  try {
    const user = await Admin.findOne({ username });
    if (!user) return res.status(404).json({ message: "Kullanıcı bulunamadı" });

    const ok = await bcrypt.compare(password, user.password);
    if (!ok) return res.status(401).json({ message: "Yanlış şifre" });

    const token = jwt.sign(
      { id: user._id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: true,       
      sameSite: "None",   
      path: "/",          
      maxAge: 24 * 60 * 60 * 1000,
    });

    res.json({ message: "Giriş başarılı" });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

router.post("/logout", (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: true,
    sameSite: "None",
    path: "/",
  });
  res.json({ message: "Çıkış başarılı" });
});

module.exports = router;
