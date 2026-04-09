const express = require('express');
const router = express.Router();
const escape = require('escape-html');

// MongoDB Injection Safe Search
router.get('/products', (req, res) => {
  const { category } = req.query;

  if (typeof category !== "string") {
    return res.status(400).json({ error: "Invalid category" });
  }

  res.json({ message: "Safe product search", category });
});

// XSS Safe Review
router.post('/reviews', (req, res) => {
  const safeComment = escape(req.body.comment);
  res.json({ review: safeComment });
});

module.exports = router;