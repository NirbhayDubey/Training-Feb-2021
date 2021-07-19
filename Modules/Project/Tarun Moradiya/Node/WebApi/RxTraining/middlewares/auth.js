// import modules
const router = require("express").Router();

const jwt = require("jsonwebtoken");
const config = require("config");

// middleware
router.use((req, res, next) => {
  // get token from cookie
  const token = req.cookies.token || "";
  // console.log(token)

  if (!token) return res.redirect("/users/login");

  // verify token
  jwt.verify(
    token,
    config.get("secretKey"),
    {
      algorithm: config.get("algorithm"),
    },
    (err, decoded) => {
      if (err) {
        let errordata = {
          message: err.message,
          expiredAt: err.expiredAt,
        };
        console.log(errordata);
        return res.redirect("/users/login");
      }

      req.user = decoded;
      // console.log(decoded);
      next();
    }
  );
});

// rexports
module.exports = router;
