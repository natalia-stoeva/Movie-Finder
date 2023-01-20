const express = require("express");
const passport = require("passport");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");

// Log In User:
router.post(
  "/login/user",
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureMessage: true,
  }),
  (req, res) => {
    const username = req.body.username
    console.log("login success");    
    res.redirect(`/profile/${username}`);
  }
);

//sign up with hash;
router.post("/singup/user", getUser, async (req, res) => {
  const { username, email, password } = req.body;
  try {
    //Hash the password before storing in DB
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newuser = new User({
      username: username,
      email: email,
      password: hashedPassword,
    });
    const newUser = await newuser.save();
    res.status(201).json(newUser);
    console.log(newUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//get user middleware
async function getUser(req, res, next) {
  console.log(req.params.username);
  let user;
  try {
    user = await User.findOne(req.params.username);
    if (!user) {
      return res.status(400).json({ message: "User doesn't exist" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  } 
  res.user = user;
  next();
}

module.exports = router;
