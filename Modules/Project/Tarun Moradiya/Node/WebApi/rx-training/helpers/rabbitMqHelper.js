const amqp = require("amqplib");
var debug = require("debug")("rx:rabbit");
const AwsHelper = require("./awsHelper");
const { Module } = require("../models/module");
const path = require("path");
const asyncHandler = require("express-async-handler");

class RabbitMqHelper {
  connect = asyncHandler(async () => {
    const connection = await amqp.connect(process.env.rabbitMqUrl);
    return connection;
  });

  disconnect = asyncHandler(async () => {
    const connection = await this.connect();
    connection.close();
    debug("rabbitmq disconected...");
  });

  consumer = asyncHandler(async (socket) => {
    const connection = await this.connect();
    const channel = await connection.createChannel();
    await channel.assertQueue("upload");
    await channel.assertQueue("delete");

    debug("consumer connected...");
    // socket.send("consumer connected...");

    await channel.consume(
      "upload",
      asyncHandler(async (data) => {
        const content = JSON.parse(data.content);
        debug("uploading...");
        debug(JSON.stringify(content).toString());
        debug(content.fileName);
        debug(content.filePath);

        const module = await Module.findById(content.moduleId).populate("tech");
        const topic = await module.topics.id(content.topicId);

        // socket.send("uploading...");

        const awsHelper = new AwsHelper();
        const dataLocation = await awsHelper.uploadFile(
          content.fileName,
          content.filePath,
          topic._id,
          socket
        );

        debug(content.contentName);

        const contName = content.contentName.replace(
          path.extname(content.contentName),
          ""
        );

        const newContent = topic.contents.create({
          contentName: contName,
          contentUrl: dataLocation,
        });

        topic.contents.push(newContent);

        await module.save();

        debug(module);

        //send acknoledgement
        channel.ack(data);
        const newData = {
          newContent,
          topicId: topic._id,
        };
        debug(newData);

        debug(
          "-----------------------------------------sending data...----------------------------------------------"
        );
        debug(
          `uploaded-${module.tech.name}-${module.name}-${topic.contentName}-${contName}`
        );
        socket.broadcast.emit("uploaded", newData);
        // socket.emit(
        //   `uploaded-${module.tech.name}-${module.name}-${topic.name}-${contName}`,
        //   newData
        // );
        debug(
          "-----------------------------------------sent data...----------------------------------------------"
        );
      })
    );

    await channel.consume(
      "delete",
      asyncHandler(async (data) => {
        debug("deleting...", data.content.toString());
        const awsHelper = new AwsHelper();
        const deleted = await awsHelper.delelteFile(data.content.toString());
        debug(deleted);

        channel.ack(data);
      })
    );
  });

  producer = () => {
    return new Promise(
      asyncHandler(async (resolve, reject) => {
        const connection = await this.connect();
        const channel = await connection.createChannel();

        debug("producer connected");

        await channel.assertQueue("upload");
        await channel.assertQueue("delete");

        resolve(channel);
      })
    );
  };
}

module.exports = RabbitMqHelper;
