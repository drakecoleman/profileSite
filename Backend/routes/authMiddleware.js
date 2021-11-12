module.exports.isAuth = (req, res, next) => {
  if (req.isAuthenticated()) {
    console.log("Authenticated");
    return next({ user: req.user, auth: true });

    // return res.status(200).json({ user: req.user, auth: true });
  } else {
    console.log("Nope");
    res.status(401).json({ auth: false });
  }
};

// module.exports.isAdmin = (req, res, next) => {
//     if (req.isAuthenticated() && req.user.admin) {
//         next();
//     } else {
//         res.status(401).json({ msg: 'You are not authorized to view this resource because you are not an admin.' });
//     }
// }
