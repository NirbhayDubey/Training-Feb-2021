const router = require("express").Router();
const DepartmentDomain = require("../../domains/deptDomain");
const admin = require("../../middlewares/admin");

class DepartmentController {
  //To get departments
  static async get(req, res) {
    const departmentDomain = new DepartmentDomain();
    departmentDomain.getDepartments(req, res);
  }
  //To insert department
  static async insertDepartment(req, res) {
    const departmentDomain = new DepartmentDomain();
    departmentDomain.insertDepartment(req, res);
  }
  //To update department
  static async updateDepartment(req, res) {
    const departmentDomain = new DepartmentDomain();
    departmentDomain.updateDepartment(req, res);
  }
  //To delete department
  static async deleteDepartment(req, res) {
    const departmentDomain = new DepartmentDomain();
    departmentDomain.deleteDepartment(req, res);
  }
  //To change permissions
  static async setPermission(req, res) {
    const departmentDomain = new DepartmentDomain();
    departmentDomain.setPermission(req, res);
  }
}

//routes

//get all departments
//GET http://localhost:3000/departments
router.get("/", DepartmentController.get);

//get department
//GET http://localhost:3000/departments/:id
router.get("/:id", DepartmentController.get);

//add department
//POST http://localhost:3000/departments
router.post("/", admin, DepartmentController.insertDepartment);

//add department
//PUT http://localhost:3000/departments/:id
// router.put('/:id', admin, updateDept);
router.post("/:id/update", admin, DepartmentController.updateDepartment);

//add department
//DELETE http://localhost:3000/departments/:id
// router.delete('/:id', admin, deleteDept);
router.get("/:id/delete", admin, DepartmentController.deleteDepartment);

//POST http://localhost:3000/departments/:id/permissions
router.post("/:id/permissions", admin, DepartmentController.setPermission);

//exports
module.exports = router;
