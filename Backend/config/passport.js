const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const connection = require("./database");
const mongoose = require("mongoose");
const User = mongoose.models.User;
const validPassword = require("../lib/passwordUtils").validPassword;
const cors = require("cors");
passport.use(cors());

const customFields = {
  usernameField: "email",
  passwordField: "password",
};

const verifyCallback = (username, password, done) => {
  User.findOne({ username: username })
    .then((user) => {
      if (!user) {
        console.log("No User");
        return done(null, false);
      }

      const isValid = validPassword(password, user.hash, user.salt);

      if (isValid) {
        console.log("Logged in");
        return done(null, user);
      } else {
        console.log("Wrong password");
        return done(null, false);
      }
    })
    .catch((err) => {
      done(err);
    });
};

const strategy = new LocalStrategy(customFields, verifyCallback);

passport.use(strategy);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((userId, done) => {
  User.findById(userId)
    .then((user) => {
      done(null, user);
    })
    .catch((err) => done(err));
});
