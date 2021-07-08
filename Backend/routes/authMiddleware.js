module.exports.isAuth = (req, res, next) => {
  if (req.isAuthenticated()) {
    res.json({ msg: "You are authorized to view this resource" });
    next();
  } else {
    console.log(req.session);
    console.log(req.user);
    console.log("checked out");
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
