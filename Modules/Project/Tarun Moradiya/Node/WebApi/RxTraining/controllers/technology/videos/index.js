// const router = require('express').Router({mergeParams: true});
const router = require("express").Router();
const VideoDomain = require("../../../domains/videoDomain");
const upload = require("../../../middlewares/updoad");
const admin = require("../../../middlewares/admin");
const contentController = require("./videoContentController");

class VideoController {
  //To get modules
  static async get(req, res) {
    const videoDomain = new VideoDomain();
    videoDomain.getTopics(req, res);
  }
  //To insert module
  static async insertModule(req, res) {
    const videoDomain = new VideoDomain();
    videoDomain.insertTopic(req, res);
  }
  //To update module
  static async updateModule(req, res) {
    const videoDomain = new VideoDomain();
    videoDomain.updateTopic(req, res);
  }
  //To delete module
  static async deleteModule(req, res) {
    const videoDomain = new VideoDomain();
    videoDomain.deleteTopic(req, res);
  }
}

//routes

//get
//GET //http://localhost:3000/technologies/:id/videos
router.get("/", VideoController.get);

//get one
//GET //http://localhost:3000/technologies/:id/videos/:id
router.get("/:id", VideoController.get);

//add
//POST //http://localhost:3000/technologies/:id/videos
router.post("/", admin, upload.array("contents"), VideoController.insertModule);

//update
//POST //http://localhost:3000/technologies/:id/videos/:id
router.post("/:id/update", admin, VideoController.updateModule);

//delete
//GET //http://localhost:3000/technologies/:id/videos/:id
router.get("/:id/delete", admin, VideoController.deleteModule);

//child routes
// http://localhost:3000/technologies/:id/videos/:id/contents
router.use(
  "/:id/contents",
  (req, res, next) => {
    req.videoId = req.params.id;
    next();
  },
  contentController
);

//exports
module.exports = router;
