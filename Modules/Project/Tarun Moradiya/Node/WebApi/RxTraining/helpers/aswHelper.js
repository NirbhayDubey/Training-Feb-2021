const debug = require("debug")("rx:aws");
const fs = require("fs");
const AWS = require("aws-sdk");
const config = require("config");
const path = require("path");

const s3 = new AWS.S3({
  accessKeyId: config.get("ID"),
  secretAccessKey: config.get("SECRET"),
});

class AwsHelper {
  async uploadFile(fileName, filepath) {
    return new Promise(async (resolve, reject) => {
      try {
        fs.readFile(filepath, (err, data) => {
          if (err) throw err;
          debug("uploading...");
          let key = fileName.replace(/\s/g, "_");
          const params = {
            Bucket: "rx-bucket", // pass your bucket name
            Key: key, // file will be saved as rx-bucket/tech_name/topic_name/video_name.mp4
            ACL: "public-read",
            Body: data,
          };

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
        const myUrl = fileName.split("/");
        const len = myUrl.length;
        const deleteParam = {
          Bucket: "rx-bucket",
          Key: `${myUrl[len - 3]}/${myUrl[len - 2]}/${myUrl[len - 1]}`,
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

// exports.uploadFile = (fileName, filepath, callback) => {
//     var mylocation;
//     fs.readFile(filepath, (err, data) => {
//      if (err) throw err;
//      const params = {
//          Bucket: 'rx-bucket', // pass your bucket name
//          Key: fileName, // file will be saved as testBucket/contacts.csv
//          Body: data
//      };
//      s3.upload(params, callback);
//   });
// };

// exports.deletefile = (fileName) => {
//     var deleteParam = {
//         Bucket: 'rx-bucket',
//         Delete: {
//             Objects: [
//                 // {Key: 'a.txt'},
//                 // {Key: 'b.txt'},
//                 // {Key: 'c.txt'}
//                 {Key: fileName}
//             ]
//         }
//     };

//     s3.deleteObjects(deleteParam, function(err, data) {
//         if (err) debug(err, err.stack);
//         else debug('delete', data);
//     });
// }
