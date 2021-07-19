const router = require("express").Router();
const ContentDomain = require("../../../domains/videoContentDomain");
const upload = require("../../../middlewares/updoad");
const admin = require("../../../middlewares/admin");

class ContentController {
  //To get contents
  static async get(req, res) {
    const contentDomain = new ContentDomain();
    contentDomain.getContents(req, res);
  }
  //To insert contents
  static async insertContents(req, res) {
    const contentDomain = new ContentDomain();
    contentDomain.insertContents(req, res);
  }
  //To update contents
  static async updateContent(req, res) {
    const contentDomain = new ContentDomain();
    contentDomain.updateContent(req, res);
  }
  //To delete content
  static async deleteContent(req, res) {
    const contentDomain = new ContentDomain();
    contentDomain.deleteContent(req, res);
  }
}

//routes

//get all contents
//GET // http://localhost:3000/technologies/:id/videos/:id/contents
router.get("/", ContentController.get);

//get content
//GET // http://localhost:3000/technologies/:id/videos/:id/contents/:id
router.get("/:id", ContentController.get);

//add content
//POST // http://localhost:3000/technologies/:id/videos/:id/contents
router.post(
  "/",
  admin,
  upload.single("content"),
  ContentController.insertContents
);

//update content
//POST // http://localhost:3000/technologies/:id/videos/:id/contents/:id
router.post("/:id/update", admin, ContentController.updateContent);

//delete content
//GET // http://localhost:3000/technologies/:id/videos/:id/contents/:id
router.get("/:id/delete", admin, ContentController.deleteContent);

//exports
module.exports = router;
