const jwt = require('jsonwebtoken');

const SECRET_KEY = "secret123";

const verifyMFA = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];
  const otp = req.headers['x-otp'];

  if (!token || !otp) {
    return res.status(401).json({ error: "Token and OTP required" });
  }

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.status(403).json({ error: "Invalid token" });

    // Dummy OTP check
    if (otp !== "123456") {
      return res.status(403).json({ error: "Invalid OTP" });
    }

    req.user = user;
    next();
  });
};

module.exports = verifyMFA;