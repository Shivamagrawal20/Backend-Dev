const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

passport.use('local', new LocalStrategy(async (username, password, done) => {
  if (username === "admin" && password === "123")
    return done(null, { id: 1 });
  return done(null, false);
}));

passport.use('jwt', new JwtStrategy({
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: "secret"
}, (payload, done) => done(null, payload)));

app.post('/auth/login',
  passport.authenticate('local', { session: false }),
  (req, res) => res.json({ msg: "Login success" })
);

app.get('/api/profile',
  passport.authenticate('jwt', { session: false }),
  (req, res) => res.json(req.user)
);