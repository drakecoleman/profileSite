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

// router.post(
//   "/login",

//   passport.authenticate("local"),
//   (req, res) => {
//     console.log("working");
//     res.sendStatus(200);
//   }
// );
// router.post("/login", (req, res) => {
//   passport.authenticate("local", (err, user, info) => {
//     res.status(200);
//   });
// });
router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    if (!user) res.send("No User Exists");
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.send(user);
        return;
        console.log(req.user);
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

/**
 * -------------- GET ROUTES ----------------
 *
 */
router.get("/user", (req, res) => {
  res.send(req.user);
});
router.get("/users", (req, res, err) => {
  User.find({}, function (err, users) {
    if (!err) {
      var userMap = {};

      users.forEach(function (user) {
        userMap[user._id] = user;
      });

      res.send(userMap);
    } else {
      console.log(err);
    }
  });
});
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
  // console.log(res.user);
});
router.get("/", isAuth);

// router.get("/logout", (req, res) => {
//   res.status(200);
//   req.logOut();
// });
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

module.exports = router;
