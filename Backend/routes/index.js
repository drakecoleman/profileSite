const router = require("express").Router();
const passport = require("passport");
const genPassword = require("../lib/passwordUtils").genPassword;
const connection = require("../config/database");
const mongoose = require("mongoose");
const User = mongoose.models.User;
const cors = require("cors");
router.use(cors({ origin: "localhost:3001" }));

const isAuth = require("./authMiddleware").isAuth;
// const isAdmin = require("./authMiddleware").isAdmin;

// router.use(bodyParser.urlencoded({ extended: false }));
/**
 * -------------- GET ROUTES ----------------
 *
 */

router.get("/user", isAuth);
/**
 * -------------- POST ROUTES ----------------
 */

router.post(
  "/login",

  passport.authenticate("local"),
  (req, res) => {}
);

router.post("/register", (req, res) => {
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
