const express = require('express');
const helmet = require('helmet');

const sanitize = require('./middleware/sanitize');
const limiter = require('./middleware/ratelimiter');
const auth = require('./middleware/auth');

const app = express();

app.use(express.json());
app.use(helmet());
app.use(sanitize);
app.use(limiter);
app.use(auth);

// Routes
app.use('/ecommerce', require('./problems/1. Ecommerce'));
app.use('/social', require('./problems/2. Social'));
app.use('/learning', require('./problems/3. lms'));
app.use('/health', require('./problems/4. health'));
app.use('/bank', require('./problems/5. banking'));

app.listen(3000, () => {
  console.log("Server running on port 3000");
});