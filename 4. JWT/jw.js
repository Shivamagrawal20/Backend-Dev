const jwt = require('jsonwebtoken');

const ACCESS_SECRET = "a";
const REFRESH_SECRET = "b";

const refreshTokens = new Set();

function generateAccessToken(user) {
  return jwt.sign(user, ACCESS_SECRET, { expiresIn: '15m' });
}

function generateRefreshToken(user) {
  const token = jwt.sign(user, REFRESH_SECRET, { expiresIn: '7d' });
  refreshTokens.add(token);
  return token;
}

app.post('/login', (req, res) => {
  const user = { id: 1 };

  const access = generateAccessToken(user);
  const refresh = generateRefreshToken(user);

  res.json({ access, refresh });
});

app.post('/token/refresh', (req, res) => {
  const { token } = req.body;

  if (!refreshTokens.has(token))
    return res.sendStatus(403);

  jwt.verify(token, REFRESH_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    res.json({ access: generateAccessToken(user) });
  });
});

app.post('/logout', (req, res) => {
  refreshTokens.delete(req.body.token);
  res.json({ message: "Logged out" });
});