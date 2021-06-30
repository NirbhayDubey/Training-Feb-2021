const express = require("express");
const Course = require("../../../models/Course");
const coursepptRoute = require("./ppt/courseppt");
const coursevideoRoute = require("./video/coursevideo");
const trainingplanRoute = require("./trainingplan/trainingplan");
const descussionRoute = require("./discussion/discussion");
const router = express.Router();

router.use("/:id/ppt", coursepptRoute);
router.use("/:id/video", coursevideoRoute);
router.use("/:id/trainingplan", trainingplanRoute);
router.use("/:id/discussion", descussionRoute);

class CourseRoute {
  static async getCourses(req, res) {
    Course.find()
      .then((courses) => {
        if (!courses)
          return res.status(404).json({
            error: "ERROR: No Course found",
          });
        else {
          res.status(200).json(courses);
        }
      })
      .catch((ex) => console.log(ex));
  }

  static async postCourses(req, res) {
    Course.findOne({ name: req.body.name })
      .then((course) => {
        if (course)
          return res.status(400).json({
            error: "Course with the given name already exist",
          });
        else {
          const newCourse = new Course({
            name: req.body.name,
            type: req.body.type,
            icon: req.body.icon,
            desc: req.body.desc,
          });
          newCourse
            .save()
            .then((course) => {
              if (course) {
                res.status(200).json({
                  msg: "Course created successfully..",
                });
              } else {
                res.status(500).json({
                  error: "ERROR: while creating new course",
                });
              }
            })
            .catch((ex) => console.log(ex));
        }
      })
      .catch((ex) => console.log(ex));
  }

  static async putCourses(req, res) {}

  static async deleteCourses(req, res) {
    Course.findByIdAndRemove(req.params.id)
      .then((course) => {
        if (course) {
          res.status(200).json({
            msg: "Course removed successfully..",
          });
        } else {
        }
      })
      .catch((ex) => console.log(ex));
  }
}

router.get("/", CourseRoute.getCourses);
router.post("/", CourseRoute.postCourses);
router.put("/:id", CourseRoute.putCourses);
router.delete("/:id", CourseRoute.deleteCourses);

module.exports = router;
