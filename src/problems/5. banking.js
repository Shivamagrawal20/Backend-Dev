const express = require('express');
const router = express.Router();

// Secure transaction
router.post('/transfer', (req, res) => {
  const { amount } = req.body;

  if (amount <= 0 || amount > 100000) {
    return res.status(400).json({ error: "Invalid amount" });
  }

  res.json({ message: "Transaction successful" });
});

// OTP validation
router.post('/secure-transfer', (req, res) => {
  const { otp } = req.body;

  if (otp !== "123456") {
    return res.status(403).json({ error: "Invalid OTP" });
  }

  res.json({ message: "Secure transaction done" });
});

module.exports = router;