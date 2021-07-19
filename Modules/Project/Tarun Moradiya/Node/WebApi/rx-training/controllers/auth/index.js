//import modules
const router = require("express").Router();

const AuthDomain = require("../../domains/AuthDomain");
const auth = require("../../middlewares/authenticationMiddleware");
const admin = require("../../middlewares/admin");

class AuthController {
  //To login
  static async login(req, res) {
    const authDomain = new AuthDomain();
    authDomain.login(req, res);
  }
  //to change password
  static async changePassword(req, res) {
    const authDomain = new AuthDomain();
    authDomain.changePassword(req, res);
  }
  //set new password
  static async resetPassword(req, res) {
    const authDomain = new AuthDomain();
    authDomain.resetPassword(req, res);
  }
  //forgot password mail
  static async recover(req, res) {
    const authDomain = new AuthDomain();
    authDomain.recover(req, res);
  }
}

// routes

// change password
// PUT http://localhost:3000/auth/change-password
router.patch("/change-password", auth, AuthController.changePassword);

// change password
// PUT http://localhost:3000/auth/change-password
router.patch("/reset-password", AuthController.resetPassword);

// user login
// POST http://localhost:3000/auth/login
router.post("/login", AuthController.login);

// forgot password
// GET http://localhost:3000/auth/recover
router.post("/recover", AuthController.recover);

//exports
module.exports = router;
