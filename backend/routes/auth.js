const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Admin = require("../models/admin");

const router = express.Router();

router.post("/login", async (req, res) => {
    const { username, password } = req.body;

    try {
   
    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
});



module.exports = router;
