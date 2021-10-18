const router = require("express").Router();
const passport = require("passport");
const bodyParser = require("body-parser");
const genPassword = require("../lib/passwordUtils").genPassword;
const connection = require("../config/database");
const mongoose = require("mongoose");
const User = mongoose.models.User;
const isAuth = require("./authMiddleware").isAuth;

// const isAdmin = require("./authMiddleware").isAdmin;

router.use(bodyParser.urlencoded({ extended: false }));
/**
 * -------------- GET ROUTES ----------------
 *
 */
// router.get("/", isAuth);
// router.get("/user", isAuth);

/**
 * -------------- GET ROUTES ----------------
 *
 */

router.get("/logout", (req, res) => {
  res.status(200);
  req.logOut();
});
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
// function getUser(req, res, next) {
//   User.findOne({ url: req.body.url })
//     .then((user) => {
//       if (!user) {
//         console.log("No user Found");
//         res.status(401);
//         next();
//       } else {
//         console.log("success");
//         res.send({ user }).status(200);
//       }
//     })
//     .then((response) => console.log(response))

//     .catch((err) => {
//       console.log(err);
//     });
// }

// router.post("/visitor", getUser);
router.post(
  "/login",

  passport.authenticate("local"),
  (req, res) => {
    console.log("working");
    res.status(200);
  }
);

router.post("/register", (req, res) => {
  const saltHash = genPassword(req.body.repeatPassword);

  const salt = saltHash.salt;
  const hash = saltHash.hash;

  const newUser = new User({
    username: req.body.email,
    hash: hash,
    salt: salt,
  });

  newUser.save().then((user) => {});
  res.sendStatus(200);
});
module.exports = router;
