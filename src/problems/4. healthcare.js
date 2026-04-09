const express = require('express');
const router = express.Router();
const validator = require('validator');

// Validate patient data
router.post('/patient', (req, res) => {
  const { email } = req.body;

  if (!validator.isEmail(email)) {
    return res.status(400).json({ error: "Invalid email" });
  }

  res.json({ message: "Patient data valid" });
});

// Secure access
router.get('/records/:id', (req, res) => {
  const userId = req.user?.id;

  if (userId != req.params.id) {
    return res.status(403).json({ error: "Unauthorized" });
  }

  res.json({ message: "Secure medical record" });
});

module.exports = router;