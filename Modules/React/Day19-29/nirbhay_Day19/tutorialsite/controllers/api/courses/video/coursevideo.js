const express = require("express");
const fs = require("fs");
const path = require("path");
const multer = require("multer");
const mongoose = require("mongoose");
const Course = require("../../../../models/Course");
const Coursevideo = require("../../../../models/Coursevideo");
const router = express.Router({ mergeParams: true });
const cloudinary = require("../../../../setup/cloudinary_config");

//middleware for accessing findOneAndRemove
mongoose.set("useFindAndModify", false);

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/uploads/videos");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});
var upload = multer({ storage: storage }).single("video");

class CoursevideoRoute {
  static async getCoursevideos(req, res) {
    Coursevideo.find({ cid: req.params.id })
      .then((cvideos) => {
        res.status(200).json(cvideos);
      })
      .catch((ex) => console.log(ex));
  }

  static async postCoursevideo(req, res) {
    Course.findById(req.params.id)
      .then(async (course) => {
        if (course) {
          const cvideo = await Coursevideo.findOne({ topic: req.body.topic });
          let newCoursevideo = "";
          if (cvideo) {
            let vids = cvideo.videos;
            vids.push(...req.body.videos);
            cvideo.set({
              id: cvideo._id,
              videos: vids,
              cid: cvideo.cid,
              topic: cvideo.topic,
              _v: cvideo._v,
            });
            newCoursevideo = cvideo;
          } else {
            newCoursevideo = new Coursevideo({
              cid: course._id,
              topic: req.body.topic,
              videos: req.body.videos,
            });
          }
          newCoursevideo
            .save()
            .then((cvideo) => {
              if (cvideo) {
                res.status(200).json({
                  msg: "Videos uploaded successfully..",
                  Courseppt: cvideo,
                });
              } else {
                res.status(400).json({
                  error: "ERROR: while uploading the video..",
                });
              }
            })
            .catch((ex) => console.log(ex));
        } else {
          res.status(404).json({
            error: "Course with the given Id was not found..",
          });
        }
      })
      .catch((ex) => console.log(ex));
  }

  static async putCoursevideo(req, res) {
    Coursevideo.findById(req.params.vid)
      .then((cvideo) => {
        if (cvideo) {
          cvideo.set({
            _id: cvideo._id,
            videos: req.body.videos,
            cid: cvideo.cid,
            topic: cvideo.topic,
            _v: cvideo._v,
          });
          cvideo
            .save()
            .then(async (svideo) => {
              if (svideo) {
                const dvideos = req.body.dvideos;

                // Deleting videos from cloudinary
                dvideos.map(async (item) => {
                  const vname = item.split("/")[8];
                  try {
                    await cloudinary.uploader.destroy("videos/" + vname, {
                      resource_type: "raw",
                    });
                  } catch (error) {
                    console.log(error);
                  }
                });

                res.status(200).json({
                  msg: "Videos updated successfully..",
                  Coursevids: svideo,
                });
              } else {
                res.status(400).json({
                  error: "ERROR: while updating videos..",
                });
              }
            })
            .catch((ex) => console.log(ex));
        }
      })
      .catch((ex) => console.log(ex));
  }
}

router.get("/", CoursevideoRoute.getCoursevideos);
router.post("/", CoursevideoRoute.postCoursevideo);
router.put("/:vid", CoursevideoRoute.putCoursevideo);

module.exports = router;
