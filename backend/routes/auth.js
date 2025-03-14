const express = require("express");
const bcrypt = require("bcrypt");
const Admin = require("../models/admin"); // Ensure the correct model import
const router = express.Router();

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  
    
  try {
    console.log(password);

    const adminUser = await Admin.findOne({ username });

    console.log(adminUser.password)
    if (!adminUser) {
      return res.status(404).json({ message: "Kullanıcı bulunamadı" });
    }

    const passwordMatch = await bcrypt.compare(password, adminUser.password);
    console.log(passwordMatch)
    if (!passwordMatch) {
      return res.status(401).json({ message: "Yanlış şifre" });
    }

    res.json({ message: "Giriş başarılı", user: adminUser.username });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
