const express = require('express');
const router = express.Router();

// Role-based access
router.get('/course', (req, res) => {
  const role = req.user?.role;

  if (role !== "instructor") {
    return res.status(403).json({ error: "Access denied" });
  }

  res.json({ message: "Instructor content" });
});

// File upload validation (mock)
router.post('/upload', (req, res) => {
  const fileType = req.body.type;

  if (fileType !== "pdf") {
    return res.status(400).json({ error: "Invalid file type" });
  }

  res.json({ message: "File uploaded safely" });
});

module.exports = router;