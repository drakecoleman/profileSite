const router = require("express").Router();
const passport = require("passport");
const bodyParser = require("body-parser");
const genPassword = require("../lib/passwordUtils").genPassword;
const connection = require("../config/database");
const mongoose = require("mongoose");
const User = mongoose.models.User;
const isAuth = require("./authMiddleware").isAuth;
// cors is needed with router.use else you have to put routes on the app.js
const cors = require("cors");
router.use(cors({ origin: "http://localhost:3001", credentials: true }));
// const isAdmin = require("./authMiddleware").isAdmin;
router.use(bodyParser.urlencoded({ extended: false }));

/**
 * -------------- Post ROUTES ----------------
 *
 */

router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      throw err;
    } else if (!user) {
      res.send("No User Exists");
    } else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.send(user);
        return;
        // console.log(req.user);
      });
    }
  })(req, res, next);
});

router.post("/register", (req, res) => {
  const saltHash = genPassword(req.body.repeatPassword);

  const salt = saltHash.salt;
  const hash = saltHash.hash;

  const newUser = new User({
    username: req.body.firstInput,
    fName: "",
    lName: "",
    title: "",
    hash: hash,
    salt: salt,
  });

  newUser.save().then((user) => {});
  res.sendStatus(200);
});
router.post("/getUserProfile", (req, res) => {
  console.log(req.body);
  User.find({ _id: req.body.f }, function (err, user) {
    console.log(user);
    res.status(200).send(user);
  });
});

/**
 * -------------- GET ROUTES ----------------
 *
 */

router.post("/user", (req, res) => {
  const fName = req.body.firstInput;
  const lName = req.body.secondInput;

  const title = req.body.repeatPassword;

  const user = req.session.passport.user;
  User.updateOne(
    { _id: user },
    { fName: fName, lName: lName, title: title },
    function (err, result) {
      if (err) {
        res.sendStatus(401);
        console.log(err);
      } else {
        res.sendStatus(200);
      }
    }
  );
});
router.get("/", isAuth, (req, res) => {
  const userMap = {};
  User.find({}, function (err, users) {
    users.forEach(function (user) {
      userMap[user._id] = user;
    });
    return userMap;
  })
    .then((response) => {
      res.status(200).json({ user: req.user, auth: true, response });
      return;
    })
    .catch((err) => console.log(err));
});

module.exports = router;
