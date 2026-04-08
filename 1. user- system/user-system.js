const express = require('express');
const bcrypt = require('bcrypt');
const app = express();

app.use(express.json());

const users = [];

function validatePassword(password) {
  const errors = [];

  if (password.length < 8) errors.push("Min 8 chars required");
  if (!/[A-Z]/.test(password)) errors.push("Uppercase required");
  if (!/[a-z]/.test(password)) errors.push("Lowercase required");
  if (!/\d/.test(password)) errors.push("Number required");
  if (!/[!@#$%^&*]/.test(password)) errors.push("Special char required");

  return { valid: errors.length === 0, errors };
}

app.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password)
    return res.status(400).json({ error: "All fields required" });

  if (users.find(u => u.email === email))
    return res.status(409).json({ error: "User exists" });

  const check = validatePassword(password);
  if (!check.valid)
    return res.status(400).json({ errors: check.errors });

  const hash = await bcrypt.hash(password, 10);

  users.push({ id: users.length + 1, username, email, password: hash });

  res.status(201).json({ message: "Registered" });
});

app.listen(3000);