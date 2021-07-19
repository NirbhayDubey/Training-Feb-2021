//import modules
const router = require("express").Router();

const UserDomain = require("../../domains/userDomain");
const auth = require("../../middlewares/auth");
const admin = require("../../middlewares/admin");

class UserController {
  //To get user
  static async get(req, res) {
    const userDomain = new UserDomain();
    userDomain.getUser(req, res);
  }
  //To get user
  static async getUsers(req, res) {
    const userDomain = new UserDomain();
    userDomain.getUsers(req, res);
  }
  //To insert user
  static async insertUser(req, res) {
    const userDomain = new UserDomain();
    userDomain.insertUser(req, res);
  }
  //To login
  static async login(req, res) {
    const userDomain = new UserDomain();
    userDomain.login(req, res);
  }
  //To logout
  static async logout(req, res) {
    const userDomain = new UserDomain();
    userDomain.logout(req, res);
  }
  //To logout
  static async setPermission(req, res) {
    const userDomain = new UserDomain();
    userDomain.setPermission(req, res);
  }
}

// routes

// users page
// GET http://localhost:3000/users
router.get("/", [auth, admin], UserController.getUsers);

// user profile page
// GET http://localhost:3000/users
router.get("/me", auth, UserController.get);

//user Registration
//POST http://localhost:3000/users
router.post("/", UserController.insertUser);

// user login page
// GET http://localhost:3000/users/login
router.get("/login", (req, res) => res.render("pages/login"));

// user logout
// GET http://localhost:3000/users/login
router.get("/logout", UserController.logout);

// user login
// POST http://localhost:3000/users/login
router.post("/login", UserController.login);

// set user permission
// POST http://localhost:3000/users/:id/permissions
router.post("/:id/permissions", UserController.setPermission);

//exports
module.exports = router;
