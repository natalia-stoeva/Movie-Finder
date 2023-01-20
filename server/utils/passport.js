const passport = require("passport");
const LocalStrategy = require("passport-local");
const bcrypt = require("bcrypt");
const User = require("../models/user");

//define passport local strategy
passport.use(
  new LocalStrategy(async function (username, password, done) {
    const user = await User.findOne({ username: username });
    if (!user) return done(null, false);

    const match = await bcrypt.compare(password, user.password);
    if (!match) return done(null, false);
    console.log("passport: user and pass match");
    return done(null, user);
  })
);

//serialize a user
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  // Look up user id in database.
  User.findById(id, function (err, user) {
    if (err) return done(err);
    done(null, user);
  });
});
