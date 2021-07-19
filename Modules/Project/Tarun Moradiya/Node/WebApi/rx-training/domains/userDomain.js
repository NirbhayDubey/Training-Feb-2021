// import modules
const jwt = require("jsonwebtoken");
const _ = require("lodash");
const bcrypt = require("bcrypt");
const Joi = require("joi");
const csv = require("csvtojson");
const path = require("path");
const fs = require("fs");
const { User, validate: validateUser } = require("../models/user");
const { Department } = require("../models/department");
const { Technology } = require("../models/technology");
const asyncHandler = require("express-async-handler");
const debug = require("debug")("rx:users");

class UserDomain {
  //To get all users
  async getUsers(req, res) {
    try {
      const users = await User.find({
        email: { $nin: req.user.email },
      });
      res.send(users);
    } catch (error) {
      debug(error);
    }
  }

  //To get user
  async getUser(req, res) {
    try {
      const user = await User.findById(req.user._id).populate("department");
      res.send(user);
    } catch (error) {
      res.send(error);
    }
  }

  //To insert user
  async insertUser(req, res) {
    try {
      debug(req.body);
      const { error } = validateUser(req.body);
      if (error) return res.status(400).send(error.details[0].message);

      let checkEmail = await User.findOne({ email: req.body.email });
      if (checkEmail) return res.status(400).send("email already registered");

      const checkUser = await User.findOne({ username: req.body.username });
      if (checkUser) return res.status(400).send("username already registered");

      let isAdmin = true;
      let department;

      if (req.body.isAdmin === false) {
        isAdmin = false;
        department = await Department.findById(req.body.department);
        if (!department) return res.status(400).send("department not found");
        department = department._id;
      }

      const user = new User({
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        isAdmin: isAdmin,
        department: department,
      });

      if (req.body.password) {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(req.body.password, salt);
      }

      await user.save();

      if (!isAdmin) await user.setPermission();

      debug(user);

      res.send(user);
    } catch (error) {
      res.send(error);
    }
  }

  //updated user
  updateUser = asyncHandler(async (req, res) => {
    // const { error } = validateUser(req.body);
    // if (error) return res.status(400).send(error.details[0].message);

    debug(req.body);

    const user = await User.findById(req.params.id);

    const checkEmail = await User.findOne({ email: req.body.email });
    if (checkEmail && checkEmail._id != req.params.id) {
      debug("email already registered");
      return res.status(400).send("email already registered");
    }

    const checkUser = await User.findOne({ username: req.body.username });
    if (checkUser && checkUser._id != req.params.id) {
      debug("username already registered");
      return res.status(400).send("username already registered");
    }

    let isAdmin = true;
    let department;

    if (req.body.isAdmin === false) {
      isAdmin = false;
      department = await Department.findById(req.body.department);
      if (!department) return res.status(400).send("department not found");
    }

    if (req.body.name) user.name = req.body.name;
    if (req.body.username) user.username = req.body.username;
    if (req.body.email) user.email = req.body.email;
    if (req.body.isAdmin) user.isAdmin = isAdmin;
    if (req.body.department && req.body.department !== user.department) {
      user.department = department;
      if (!isAdmin) await user.setPermission();
    }

    await user.save();

    debug(user);

    res.send(user);
  });

  deleteUser = asyncHandler(async (req, res) => {
    //find by id and delete
    const user = await User.findByIdAndRemove(req.params.id);

    //if not found return
    if (!user) return res.status(404).send("user with given id not found!!!");

    debug("deleted user: ", user);

    //response
    res.send(user);
  });

  //To logout
  async logout(req, res) {
    try {
      //delete cookie and redirect to login page
      res.clearCookie("token").send("/users/login");
    } catch (error) {
      res.send(error);
    }
  }

  async addMultiple(item) {
    // const { error } = validateUser(item);
    // if (error) return res.json({ user: item, err: error.details[0].message });

    let checkEmail = await User.findOne({ email: item.email });
    if (checkEmail)
      return { success: false, user: item, err: "email already registered" };

    const checkUser = await User.findOne({ username: item.username });
    if (checkUser)
      return {
        success: false,
        user: item,
        err: "username already registered",
      };

    let isAdmin = true;
    let department = undefined;

    debug(item);

    if (item.isAdmin === "FALSE") {
      isAdmin = false;
      department = await Department.findOne({ name: item.department });
      debug(department);
      if (!department)
        return {
          success: false,
          user: item,
          msg: "department not found",
        };
      department = department._id;
    }

    debug(department);

    const user = new User({
      name: item.name,
      username: item.username,
      email: item.email,
      isAdmin: isAdmin,
      department: department,
    });

    if (item.password) {
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(item.password, salt);
    }

    await user.save();

    if (!isAdmin) await user.setPermission();

    debug(user);

    return { success: true, user };
  }

  //To add multiple users with csv file
  async addMultipleUsers(req, res) {
    try {
      debug("body", req.body);
      debug("file", req.file);

      // const filePath = path.join(__dirname, req.file.path);
      // debug(filePath);

      const jsonArray = await csv().fromFile(req.file.path);
      debug(jsonArray);

      const userArr = [];
      const errArr = [];
      let response;

      for (let item of jsonArray) {
        response = await this.addMultiple(item, res);
        if (!response.success) errArr.push(response);
        else userArr.push(response.user);
      }

      fs.unlink(req.file.path, (err) => {
        if (err) debug(err);
        else debug("csv file deleted");
      });
      debug({ errArr, userArr });
      res.json({ errArr, userArr });
    } catch (error) {
      debug(error);
      res.json({ err: error });
    }
  }

  //To set permission
  async setPermission(req, res) {
    try {
      debug(req.body);
      const user = await User.findById(req.params.id);

      user.permissions = req.body.permissions;

      await user.save();

      debug(user);
      res.send(user.permissions);
    } catch (error) {
      res.send(error);
    }
  }
}

// async function validate(user) {
//   try {
//     const schema = Joi.object({
//       email: Joi.string().min(5).max(255).required().email(),
//       password: Joi.string().min(2).max(255).required(),
//     });

//     return await schema.validate(user);
//   } catch (err) {
//     console.error(err);
//   }
// }

module.exports = UserDomain;
