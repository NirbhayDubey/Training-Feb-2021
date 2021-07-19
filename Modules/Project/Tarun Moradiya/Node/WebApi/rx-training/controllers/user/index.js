//import modules
const router = require("express").Router();

const UserDomain = require("../../domains/userDomain");
const auth = require("../../middlewares/authenticationMiddleware");
const admin = require("../../middlewares/admin");
const upload = require("../../middlewares/upload");

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
  //To update user
  static async updateUser(req, res) {
    const userDomain = new UserDomain();
    userDomain.updateUser(req, res);
  }
  //To delete user
  static async deleteUser(req, res) {
    const userDomain = new UserDomain();
    userDomain.deleteUser(req, res);
  }
  //To logout
  static async setPermission(req, res) {
    const userDomain = new UserDomain();
    userDomain.setPermission(req, res);
  }
  //To Add users from csv file
  static async addMultipleUsers(req, res) {
    const userDomain = new UserDomain();
    userDomain.addMultipleUsers(req, res);
  }
}

// routes

// users page
// GET http://localhost:3000/users
router.get("/", auth, UserController.getUsers);

// user profile page
// GET http://localhost:3000/users
router.get("/me", auth, UserController.get);

//user Registration
//POST http://localhost:3000/users
router.post("/", [auth, admin], UserController.insertUser);

//users Registration from csv file
//POST http://localhost:3000/users/multiple
router.post(
  "/multiple",
  [auth, admin],
  upload.single("users"),
  UserController.addMultipleUsers
);

//user update
//PUT http://localhost:3000/users/:id
router.put("/:id", [auth, admin], UserController.updateUser);

//user delete
//DELETE http://localhost:3000/users/:id
router.delete("/:id", [auth, admin], UserController.deleteUser);

// set user permission
// POST http://localhost:3000/users/:id/permissions
router.post("/:id/permissions", [auth, admin], UserController.setPermission);

//exports
module.exports = router;
