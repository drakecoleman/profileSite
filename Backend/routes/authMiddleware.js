module.exports.isAuth = (req, res, next) => {
  if (req.isAuthenticated()) {
    console.log(req.user);
    res.json(req.user.firstName);
    next();
  } else {
    console.log("Nope");

    res
      .status(401)
      .json({ msg: "You are not authorized to view this resource" });
  }
};

// module.exports.isAdmin = (req, res, next) => {
//     if (req.isAuthenticated() && req.user.admin) {
//         next();
//     } else {
//         res.status(401).json({ msg: 'You are not authorized to view this resource because you are not an admin.' });
//     }
// }
