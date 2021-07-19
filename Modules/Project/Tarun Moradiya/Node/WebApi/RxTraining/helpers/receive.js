const amqp = require("amqplib");
var debug = require("debug")("rx:recieve");
const AwsHelper = require("./aswHelper");
const { Technology } = require("../models/technology");
const path = require("path");

const awsHelper = new AwsHelper();

async function connect() {
  return new Promise(async (resolve, reject) => {
    try {
      const connection = await amqp.connect("amqp://localhost");
      const channel = await connection.createChannel();
      await channel.assertQueue("upload");
      await channel.assertQueue("delete");

      debug("waiting to upload videos...");

      await channel.consume("upload", async (data) => {
        const content = JSON.parse(data.content);
        debug("got data");
        debug(JSON.stringify(content).toString());
        debug(content.fileName);
        debug(content.filePath);
        const dataLocation = await awsHelper.uploadFile(
          content.fileName,
          content.filePath
        );

        debug(content.contentName);

        const tech = await Technology.findById(content.techId);
        const module = await tech.videos.id(content.topicId);
        const contName = content.contentName.replace(
          path.extname(content.contentName),
          ""
        );
        module.contents.push({
          contentName: content.contentName,
          contentUrl: dataLocation,
        });
        await tech.save();
        //send acknoledgement
        channel.ack(data);
        resolve(data);
      });

      channel.consume("delete", async (data) => {
        debug(data.content.toString());
        const deleted = await awsHelper.delelteFile(data.content.toString());
        debug(deleted);

        channel.ack(data);
        resolve(data);
      });
    } catch (error) {
      reject(error);
    }
  });
}

module.exports = connect;

// const data = await awsHelper.delelteFile(content.contentUrl);
//       debug(content.contentUrl);

// dataLocation = await this.uploadFile(fileNameKey, filepath);

// let contName = req.files[i].originalname;
// contName = contName.replace(path.extname(contName), "");

// arr.push({
//   contentName: contName,
//   contentUrl: dataLocation,
// });

// awsHelper
//   .uploadFiles(req.files, ``)
//   .then(async (arr) => {
//     //create
//     modules.push({
//       topic: req.body.topic,
//       contents: arr,
//     });

//     //save to db
//     tech = await tech.save();
//   });
