const express = require("express");
const passport = require("passport");
const Course = require("../../../models/Course");
const Courseppt = require("../../../models/Courseppt");
const Coursevideo = require("../../../models/Coursevideo");
const TrainingPlan = require("../../../models/TrainingPlan");
const Descussion = require("../../../models/Discussion");
const router = express.Router();

class CoursedataRoute {
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

  static async getSingleCourses(req, res) {
    Course.findOne({ name: req.params.name })
      .then((course) => {
        if (!course)
          return res.status(404).json({
            error: "ERROR: No Course found",
          });
        else {
          res.status(200).json(course);
        }
      })
      .catch((ex) => console.log(ex));
  }

  static async getCoursesIn(req, res) {
    Course.find({ _id: { $in: req.body.courses } })
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

  static async getCourseppts(req, res) {
    const coursename = req.path.slice(1).split("-")[0].replace(/%20/g, " ");
    const re = new RegExp(coursename, "i");
    Course.findOne({ name: { $regex: re } })
      .then((course) => {
        if (!course)
          return res.status(404).json({
            error: "ERROR: No Course found",
          });
        else {
          Courseppt.findOne({ cid: course._id })
            .then((ppts) => {
              //All PPTS Found HERE
              res.status(200).json(ppts);
            })
            .catch((ex) => console.log(ex));
        }
      })
      .catch((ex) => console.log(ex));
  }

  static async getCoursevideos(req, res) {
    const coursename = req.path.slice(1).split("-")[0].replace(/%20/g, " ");
    const re = new RegExp(coursename, "i");
    Course.findOne({ name: { $regex: re } })
      .then((course) => {
        if (!course)
          return res.status(404).json({
            error: "ERROR: No Course found",
          });
        else {
          Coursevideo.find({ cid: course._id })
            .sort([["_id", 1]])
            .then((videos) => {
              //All VIDEOS Found HERE
              res.status(200).json(videos);
            })
            .catch((ex) => console.log(ex));
        }
      })
      .catch((ex) => console.log(ex));
  }

  static async getTrainingPlan(req, res) {
    const coursename = req.path.slice(1).split("-")[0].replace(/%20/g, " ");
    const re = new RegExp(coursename, "i");
    Course.findOne({ name: { $regex: re } })
      .then((course) => {
        if (!course)
          return res.status(404).json({
            error: "ERROR: No Course found",
          });
        else {
          TrainingPlan.find({ cid: course._id })
            .sort({ tp_day: 1 })
            .then((plans) => {
              res.status(200).json(plans);
            })
            .catch((ex) => console.log(ex));
        }
      })
      .catch((ex) => console.log(ex));
  }

  static async getDiscussions(req, res) {
    const coursename = req.path.slice(1).split("-")[0].replace(/%20/g, " ");
    const re = new RegExp(coursename, "i");
    Course.findOne({ name: { $regex: re } })
      .then((course) => {
        if (!course)
          return res.status(404).json({
            error: "ERROR: No Course found",
          });
        else {
          Descussion.find({ cid: course._id })
            .sort([["_id", 1]])
            .then((discs) => {
              res.status(200).json(discs);
            })
            .catch((ex) => console.log(ex));
        }
      })
      .catch((ex) => console.log(ex));
  }
}

router.get(
  /.*-ppts$/,
  passport.authenticate("jwt", { session: false }),
  CoursedataRoute.getCourseppts
);
router.get(
  /.*-videos$/,
  passport.authenticate("jwt", { session: false }),
  CoursedataRoute.getCoursevideos
);
router.get(
  /.*-training-plan$/,
  passport.authenticate("jwt", { session: false }),
  CoursedataRoute.getTrainingPlan
);
router.get(
  /.*-discussion$/,
  passport.authenticate("jwt", { session: false }),
  CoursedataRoute.getDiscussions
);
router.get("/", CoursedataRoute.getCourses);
router.get("/:name", CoursedataRoute.getSingleCourses);
router.post("/", CoursedataRoute.getCoursesIn);

module.exports = router;
