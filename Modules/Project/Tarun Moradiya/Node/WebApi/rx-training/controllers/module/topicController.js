const router = require("express").Router();
const debug = require("debug")("rx:");
const TopicDomain = require("../../domains/topicDomain");
const contentController = require("./contentController");
const upload = require("../../middlewares/upload");
const admin = require("../../middlewares/admin");

class TopicController {
  //To get topics
  static async get(req, res) {
    const topicDomain = new TopicDomain();
    topicDomain.getTopics(req, res);
  }
  //To insert topic
  static async insertTopic(req, res) {
    const topicDomain = new TopicDomain();
    topicDomain.insertTopic(req, res);
  }
  //To insert topic
  static async insertMultipleTopics(req, res) {
    const topicDomain = new TopicDomain();
    topicDomain.insertMultipleTopics(req, res);
  }
  //To update topic
  static async updateTopic(req, res) {
    const topicDomain = new TopicDomain();
    topicDomain.updateTopic(req, res);
  }
  //To delete topic
  static async deleteTopic(req, res) {
    const topicDomain = new TopicDomain();
    topicDomain.deleteTopic(req, res);
  }
}

//routes

//get all topics
//GET http://localhost:3000/modules/:moduleId/topics
router.get("/", TopicController.get);

//get topic
//GET http://localhost:3000/technologies/modules/:moduleId/:techId/topics/:id
router.get("/:id", TopicController.get);

//add topic
//POST http://localhost:3000/modules/:moduleId/topics
router.post("/", admin, upload.array("contents"), TopicController.insertTopic);

//add topics
//POST http://localhost:3000/modules/:moduleId/topics
router.post(
  "/multiple",
  admin,
  upload.single("topics"),
  TopicController.insertMultipleTopics
);

//update topic
//PUT http://localhost:3000/modules/:moduleId/topics/:id
router.put("/:id", admin, TopicController.updateTopic);

//delete topic
//DELETE http://localhost:3000/modules/:moduleId/topics/:id
router.delete("/:id", admin, TopicController.deleteTopic);

//child routes

//http://localhost:3000/modules/:moduleId/topics/:id/contents
router.use(
  "/:id/contents",
  (req, res, next) => {
    req.topicId = req.params.id;
    next();
  },
  contentController
);

//exports
module.exports = router;
