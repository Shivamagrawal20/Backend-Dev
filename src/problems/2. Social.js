const express = require('express');
const router = express.Router();
const escape = require('escape-html');

// Safe Post Creation
router.post('/post', (req, res) => {
  const content = escape(req.body.content);
  res.json({ post: content });
});

// Secure Bio Update
router.put('/bio', (req, res) => {
  const bio = escape(req.body.bio);
  res.json({ bio });
});

module.exports = router;