const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET || "67531e047121d583dbfbc0b14ff98b4fc990ba17accde91343e05833690e3ee";

const authenticate = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "Token eksik" });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Geçersiz token" });
  }
};

module.exports = authenticate;
