const debug = require("debug")("rx:aws");
const fs = require("fs");
const AWS = require("aws-sdk");
const path = require("path");
const { v4: uuid } = require("uuid");
const s3 = new AWS.S3({
  accessKeyId: process.env.rx_training_ID,
  secretAccessKey: process.env.rx_training_SECRET,
});

class AwsHelper {
  async uploadFile(fileName, filepath, topicId, socket) {
    return new Promise(async (resolve, reject) => {
      try {
        fs.readFile(filepath, (err, data) => {
          if (err) throw err;
          debug("uploading...");
          let key = fileName.replace(/\s/g, "_");
          key = key.replace(/[()\[\]{}]/g, "_");
          debug(key);
          const params = {
            Bucket: "rx-bucket", // pass your bucket name
            Key: key, // file will be saved as rx-bucket/tech_name/topic_name/video_name.mp4
            ACL: "public-read",
            Body: data,
          };
          const progressId = uuid();
          s3.upload(params, async function (s3Err, data) {
            if (s3Err) reject(s3Err);
            debug(`File uploaded successfully at ${data.Location}`);

            fs.unlink(filepath, (Ferr) => {
              if (Ferr) {
                console.error(Ferr);
                return;
              }
            });

            resolve(data.Location);
          }).on("httpUploadProgress", function (evt) {
            debug(
              "Uploaded :: " + parseInt((evt.loaded * 100) / evt.total) + "%"
            );
            const myMsg = {
              progressId,
              topicId,
              progressVal: parseInt((evt.loaded * 100) / evt.total),
            };
            debug(myMsg);
            socket.broadcast.emit("progress", myMsg);
          });
        });
      } catch (error) {
        reject(error);
      }
    });
  }

  async delelteFile(fileName) {
    return new Promise((resolve, reject) => {
      try {
        debug("deleting...");
        const myUrl = fileName.split("amazonaws.com/");
        const deleteParam = {
          Bucket: "rx-bucket",
          Key: myUrl[1],
        };

        s3.deleteObject(deleteParam, function (err, data) {
          if (err) {
            debug(err, err.stack);
            reject(err);
          } else {
            debug("deleted", data);
            resolve(data);
          }
        });
      } catch (error) {
        reject(error);
      }
    });
  }
}

module.exports = AwsHelper;

