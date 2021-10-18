const express = require("express");
const app = express();
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const crypto = require("crypto");
const routes = require("./routes");
const connection = require("./config/database");
const cors = require("cors");
app.use(cors({ origin: "http://localhost:3001", credentials: true }));
const User = mongoose.models.User;

const bodyParser = require("body-parser");

const MongoStore = require("connect-mongo")(session);

require("dotenv").config();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const sessionStore = new MongoStore({
  mongooseConnection: mongoose.connection,
  collection: "sessions",
});

app.use(
  session({
    secret: "zdfbdaf",
    resave: true,
    saveUninitialized: true,
    store: sessionStore,
    cookie: {
      cookie: { secure: false },
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);
// app.use((req, res) => {
//   User.findOne({ url: req.body.url })
//     .then((user) => {
//       if (!user) {
//         console.log("No user Found");
//         res.send("No user found");
//       } else {
//         console.log("user Found");
//         res.send(user).status(200);
//       }
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

require("./config/passport");

app.use(passport.initialize());
app.use(passport.session());
app.post(
  "/login",

  passport.authenticate("local"),
  (req, res) => {
    console.log("working");
    res.sendStatus(200);
  }
);

app.use(routes);

app.listen(3000);
