const express = require('express');
const session = require('express-session');

const app = express();
app.use(express.json());

app.use(session({
  secret: 'cart-secret',
  resave: false,
  saveUninitialized: false
}));

const initCart = (req, res, next) => {
  if (!req.session.cart) req.session.cart = [];
  next();
};

app.use(initCart);

app.post('/cart/add', (req, res) => {
  const { productId, price } = req.body;

  req.session.cart.push({ productId, price, qty: 1 });
  res.json({ cart: req.session.cart });
});

app.put('/cart/update/:id', (req, res) => {
  const item = req.session.cart.find(i => i.productId == req.params.id);
  if (item) item.qty = req.body.qty;

  res.json(req.session.cart);
});

app.delete('/cart/remove/:id', (req, res) => {
  req.session.cart = req.session.cart.filter(i => i.productId != req.params.id);
  res.json(req.session.cart);
});

app.get('/cart', (req, res) => {
  const total = req.session.cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  res.json({ items: req.session.cart, total });
});

app.listen(3000);