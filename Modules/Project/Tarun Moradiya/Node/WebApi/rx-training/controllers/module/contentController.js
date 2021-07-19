const router = require("express").Router();
const debug = require("debug")("rx:");
const ContentDomain = require("../../domains/contentDomain");
const upload = require("../../middlewares/upload");
const admin = require("../../middlewares/admin");

class ContentController {
  //To get contents
  static async get(req, res) {
    const contentDomain = new ContentDomain();
    contentDomain.getContents(req, res);
  }
  //To insert content
  static async insertContent(req, res) {
    const contentDomain = new ContentDomain();
    contentDomain.insertContent(req, res);
  }
  //To update plan
  static async updateContent(req, res) {
    const contentDomain = new ContentDomain();
    contentDomain.updateContent(req, res);
  }
  //To delete plan
  static async deleteContent(req, res) {
    const contentDomain = new ContentDomain();
    contentDomain.deleteContent(req, res);
  }
}

//routes

//get all contents
//GET http://localhost:3000/modules/:moduleId/topics/:topicId/contents
router.get("/", ContentController.get);

//get content
//GET http://localhost:3000/modules/:moduleId/topics/:topicId/contents/:id
router.get("/:id", ContentController.get);

//add content
//POST http://localhost:3000/modules/:moduleId/topics/:topicId/contents
router.post(
  "/",
  admin,
  upload.single("content"),
  ContentController.insertContent
);

//update content
//PUT http://localhost:3000/modules/:moduleId/topics/:topicId/contents/:id
router.put("/:id", admin, ContentController.updateContent);

//delete content
//DELETE http://localhost:3000/modules/:moduleId/topics/:topicId/contents/:id
router.delete("/:id", admin, ContentController.deleteContent);

//exports
module.exports = router;
