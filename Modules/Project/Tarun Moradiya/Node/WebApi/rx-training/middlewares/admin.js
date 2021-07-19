const debug = require("debug")("rx:admin");
module.exports = function (req, res, next) {
  if (!req.user.isAdmin) return res.status(403).send("Access Denied!!!");
  // debug(req.user.isAdmin);
  next();
};
