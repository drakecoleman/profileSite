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

// My changes
const bodyParser = require("body-parser");
// const cors = require("cors");

//

// Package documentation - https://www.npmjs.com/package/connect-mongo
const MongoStore = require("connect-mongo")(session);

/**
 * -------------- GENERAL SETUP ----------------
 */

// Gives us access to variables set in the .env file via `process.env.VARIABLE_NAME` syntax
// require("dotenv").config({ path: "ENV_FILENAME" });
require("dotenv").config();

// Afterrewatching, I commented this out nad made it look like the tutorial again. Not sure why i did it like this const dotenv = require("dotenv") dotenv.config();

// Create the Express application

app.use(express.json());

// My changes
// app.use(cors({ origin: "http://localhost:3001" }));
app.use(express.urlencoded({ extended: true }));
//

/**
 * -------------- SESSION SETUP ----------------
 */
const sessionStore = new MongoStore({
  mongooseConnection: mongoose.connection,
  collection: "sessions",
});

app.use(
  session({
    secret: "zdfbdaf",
    resave: false,
    saveUninitialized: false,
    store: sessionStore,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24, // Equals 1 day (1 day * 24 hr/1 day * 60 min/1 hr * 60 sec/1 min * 1000 ms / 1 sec)
    },
  })
);
// var cookieParser = require("cookie-parser");
// app.use(cookieParser());

/**
 * -------------- PASSPORT AUTHENTICATION ----------------
 */

// Need to require the entire Passport config module so app.js knows about it
require("./config/passport");

app.use(passport.initialize());
app.use(passport.session());
// app.use((req, res, next) => {
//   req.user = req.session.user;
//   console.log(req.user);
//   next();
// });

// app.use((req, res, next) => {
//   console.log(req.session);
//   console.log(req.user);

//   next();
// });

/**
 * -------------- ROUTES ----------------
 */

// Imports all of the routes from ./routes/index.js

app.use(routes);

/**
 * -------------- SERVER ----------------
 */

// Server listens on http://localhost:3000
app.listen(3000);
