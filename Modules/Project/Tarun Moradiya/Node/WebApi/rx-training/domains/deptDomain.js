const { Department, validate } = require("../models/department");
const { User } = require("../models/user");

const debug = require("debug")("rx:dept");

class DepartmentDomain {
  //To get Departments
  async getDepartments(req, res) {
    //check if id given
    if (req.params.id) {
      //get data with id
      const dept = await Department.findById(req.params.id);

      //if not in db return
      if (!dept)
        return res.status(404).send("Department with given id not found!!!");

      //response
      res.send(dept);
    } else {
      debug("get depts");
      //get all data
      const depts = await Department.find();

      //response
      res.send(depts);
    }
  }

  //To insert Department
  async insertDepartment(req, res) {
    //validate user input
    const { error } = await validate(req.body);

    //if error return
    if (error) return res.status(400).send(error.details[0].message);

    //create
    let dept = new Department({
      name: req.body.name,
    });

    //save to db
    dept = await dept.save();

    //response
    debug(dept);
    res.send(dept);
  }

  //To delete a Department
  async deleteDepartment(req, res) {
    //find by id and delete
    const dept = await Department.findByIdAndRemove(req.params.id);

    //if not found return
    if (!dept)
      return res.status(404).send("Department with given id not found!!!");

    //delete users in department
    await User.deleteMany({ department: req.params.id });

    debug("deleted dept: ", dept);

    //response
    res.send(dept);
  }

  //To update a Department
  async updateDepartment(req, res) {
    //validate user input
    const { error } = await validate(req.body);

    //if error return
    if (error) {
      debug(error);
      return res.status(400).send(error.details[0].message);
    }

    //find by id and update
    const dept = await Department.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
      },
      {
        new: true,
      }
    );

    //if not found return
    if (!dept)
      return res.status(404).send("Department with given id not found!!!");

    debug(dept);

    //response
    res.send(dept);
  }

  async setPermission(req, res) {
    try {
      debug(req.body);
      const dept = await Department.findById(req.params.id);

      dept.permissions = req.body.permissions;

      await dept.save();

      debug("dept:" + dept);

      const users = await User.updateMany(
        { department: req.params.id },
        {
          $set: {
            permissions: req.body.permissions,
          },
        }
      );

      debug("users:" + users);
      debug(dept);
      res.send(dept.permissions);
    } catch (error) {
      res.send(error);
    }
  }
}

module.exports = DepartmentDomain;
