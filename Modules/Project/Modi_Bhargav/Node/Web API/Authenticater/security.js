const jwt = require("jsonwebtoken");

const verifyToken1 = (req, res, next) => {
  const token1 = req.headers["token1"];
  jwt.verify(
    token1,
    global.config.secretKey,
    {
      algorithm: global.config.algorithm,
    },
    (err, decoded) => {
      if (err) {
        let errordata = {
          message: err.message,
          expiredAt: err.expiredAt,
        };
        return res.status(401).json({
          message: "Unauthorized Access",
        });
      }
      req.decoded = decoded;
      // console.log(decoded);
      next();
    }
  );
};

module.exports = verifyToken1;
