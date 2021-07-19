// import modules
const jwt = require("jsonwebtoken");
const _ = require("lodash");
const bcrypt = require("bcrypt");
const Joi = require("joi");

const { User, validate: validateUser } = require("../models/user");
const { Department } = require("../models/department");
const { Technology } = require("../models/technology");

class UserDomain {
  //To get all users
  async getUsers(req, res) {
    try {
      const users = await User.find({
        email: { $nin: req.user.email },
      }).populate("department");
      const dept = await Department.find();
      const Tech = await Technology.find();
      res.render("pages/users", { users, Tech, dept, User: req.user });
    } catch (error) {
      res.send(error);
    }
  }

  //To get user
  async getUser(req, res) {
    try {
      const Tech = await Technology.find();
      const user = await User.findById(req.user._id);
      res.render("pages/users", { user, Tech, User: req.user });
    } catch (error) {
      res.send(error);
    }
  }

  //To insert user
  async insertUser(req, res) {
    try {
      const { error } = validateUser(req.body);
      if (error) return res.status(400).send(error.details[0].message);

      let user = await User.findOne({ email: req.body.email });
      if (user) return res.status(400).send("user already registered");

      console.log(req.body);
      let department = await Department.findById(req.body.department);

      if (!department) return res.status(400).send("department not found");

      let isAdmin = false;

      if (req.body.admin == "true") {
        isAdmin = true;
        department = null;
      }

      user = new User({
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        isAdmin: isAdmin,
        department: department,
      });

      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(user.password, salt);

      await user.save();

      user.setPermission();

      res.redirect("back");
    } catch (error) {
      res.send(error);
    }
  }

  //To login
  async login(req, res) {
    try {
      const { error } = validate(req.body);
      if (error) return res.status(400).send(error.details[0].message);

      let user = await User.findOne({ email: req.body.email });
      if (!user) return res.status(400).send("Invalid email or password");

      const validPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (!validPassword)
        return res.status(400).send("Invalid email or password");

      // generate token
      const token = user.getAuthToken();
      console.log(user, token);

      //set cookie and send
      res
        .cookie("token", token, {
          expires: new Date(Date.now() + 36000000),
          secure: false, // set to true if your using https
          httpOnly: true,
        })
        .redirect("/");
    } catch (error) {
      res.send(error);
    }
  }

  //To logout
  async logout(req, res) {
    try {
      //delete cookie and redirect to login page
      res.clearCookie("token").redirect("/users/login");
    } catch (error) {
      res.send(error);
    }
  }

  //To set permission
  async setPermission(req, res) {
    try {
      const user = await User.findById(req.params.id);

      user.permissions = req.body.tech;

      await user.save();

      console.log(user);
      res.redirect("back");
    } catch (error) {
      res.send(error);
    }
  }
}

async function validate(user) {
  try {
    const schema = Joi.object({
      email: Joi.string().min(5).max(255).required().email(),
      password: Joi.string().min(2).max(255).required(),
    });

    return await schema.validate(user);
  } catch (err) {
    console.error(err);
  }
}

module.exports = UserDomain;
