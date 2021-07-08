const router = require("express").Router();
const passport = require("passport");
const genPassword = require("../lib/passwordUtils").genPassword;
const connection = require("../config/database");
const mongoose = require("mongoose");
const User = mongoose.models.User;
const cors = require("cors");
router.use(cors());

const isAuth = require("./authMiddleware").isAuth;
// const isAdmin = require("./authMiddleware").isAdmin;

// router.use(bodyParser.urlencoded({ extended: false }));
/**
 * -------------- GET ROUTES ----------------
 *
 */
router.get("/user", isAuth, (req, res) => {
  console.log(req);
});
/**
 * -------------- POST ROUTES ----------------
 */

router.post(
  "/login",

  passport.authenticate("local"),
  (req, res) => {
    console.log(req.user);
  }
);

router.post("/register", (req, res, next) => {
  const saltHash = genPassword(req.body.pass2);

  const salt = saltHash.salt;
  const hash = saltHash.hash;

  const newUser = new User({
    username: req.body.email,
    firstName: req.body.first,
    lastName: req.body.last,
    hash: hash,
    salt: salt,
    admin: true,
  });

  newUser.save();
});
module.exports = router;
