const loginAttempts = new Map();

function checkLoginAttempts(email) {
  const data = loginAttempts.get(email);

  if (!data) return true;

  if (data.lockUntil && Date.now() < data.lockUntil)
    return false;

  return true;
}

function recordFailedAttempt(email) {
  let data = loginAttempts.get(email) || { count: 0 };

  data.count++;

  if (data.count >= 5) {
    data.lockUntil = Date.now() + 30 * 60 * 1000;
  }

  loginAttempts.set(email, data);
}

function clearAttempts(email) {
  loginAttempts.delete(email);
}

app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  if (!checkLoginAttempts(email))
    return res.status(403).json({ error: "Account locked" });

  if (password !== "123") {
    recordFailedAttempt(email);
    return res.status(401).json({ error: "Invalid" });
  }

  clearAttempts(email);
  res.json({ message: "Login success" });
});