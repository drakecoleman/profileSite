const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const connection = require("./database");
const mongoose = require("mongoose");
const User = mongoose.models.User;
const validPassword = require("../lib/passwordUtils").validPassword;
const cors = require("cors");
passport.use(cors({ origin: "http://localhost:3001" }));

const customFields = {
  usernameField: "email",
  passwordField: "password",
};

passport.use(
  new LocalStrategy(customFields, (username, password, done) => {
    User.findOne({ username: username })
      .then((user) => {
        if (!user) {
          return done(null, false);
        } else {
          const isValid = validPassword(password, user.hash, user.salt);
          if (isValid) {
            console.log("Logged in");
            done(null, user);
          } else {
            return done(null, true);
          }
        }
      })
      .catch((err) => {
        done(err);
      });
  })
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  })
    .then((user) => {
      done(null, user);
    })
    .catch((err) => done(err));
});
