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
// app.use(bodyParser.urlencoded({ extended: false }));

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

// app.use((req, res, next) => {
//   console.log("talking");
//   next();
//   // User.findOne({ url: req.body.url })
//   //   .then((user) => {
//   //     if (!user) {
//   //       console.log("No user Found");
//   //       res.send("No user found");
//   //     } else {
//   //       console.log("user Found");
//   //       res.send(user).status(200);
//   //     }
//   //   })
//   //   .catch((err) => {
//   //     console.log(err);
//   //   });
// });

require("./config/passport");

app.use(passport.initialize());
app.use(passport.session());

app.use("/", routes);
// app.post("/login", (req, res) => {
//   passport.authenticate("local", (err, user, info) => {
//     console.log("here");
//     console.log(user);
//     return user;
//   });
// });
// app.post("/login", (req, res, next) => {
//   passport.authenticate("local", (err, user, info) => {
//     if (err) throw err;
//     if (!user) res.send("No User Exists");
//     else {
//       req.logIn(user, (err) => {
//         if (err) throw err;
//         res.send(user);
//         return;
//         console.log(req.user);
//       });
//     }
//   })(req, res, next);
// });

app.listen(3000);
