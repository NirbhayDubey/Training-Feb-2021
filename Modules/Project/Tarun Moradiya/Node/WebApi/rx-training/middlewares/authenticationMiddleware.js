// import modules
const jwt = require("jsonwebtoken");
const debug = require("debug")("rx:auth");

// middleware
const authenticateJwt = (req, res, next) => {
  const authHeader = req.headers.authorization;
  // const authHeader = req.headers.authorization;
  // debug(req.headers);
  // debug("header", authHeader);
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    // debug("token", token);
    const accessTokenSecret = process.env.rx_training_secretKey;
    const jwtAlgorithm = process.env.rx_training_algorithm;

    jwt.verify(
      token,
      accessTokenSecret,
      { algorithm: jwtAlgorithm },
      (err, user) => {
        if (err) {
          debug("token is wrong");
          return res.sendStatus(403);
        }

        req.user = user;
        // debug("req.user: ", req.user);
        next();
      }
    );
  } else {
    debug("no token in header");
    res.sendStatus(401);
  }
};

// rexports
module.exports = authenticateJwt;
