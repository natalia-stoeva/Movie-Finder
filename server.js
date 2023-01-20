require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const router = require("./server/routes/users");
const session = require("express-session");
const passport = require("passport");

//app config
const PORT = process.env.PORT || 8080;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//connect to database
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: "movieFinder",
});
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to database " + db.name));

//session config
app.use(
  session({
    secret: "kKJjd4ww54df5dI",
    cookie: { maxAge: 1000 * 60 * 60 * 24 },
    saveUninitialized: false,
    resave: false,
    sameSite: "none",
    secure: true,
  })
);

//passport config
require("./server/utils/passport"); //?
app.use(passport.initialize());
app.use(passport.session());

app.use("/", router);

//?
app.get("/profile", (req, res) => {
  console.log(user);
  res.render("profile", { user: req.user });
});

app.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/login");
});

app.listen(PORT, () => console.log("Server Started on port" + PORT));
