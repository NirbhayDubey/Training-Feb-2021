const debug = require("debug")("rx:topics");
const { Module } = require("../models/module");
const fs = require("fs");
const path = require("path");
const Converter = require("ppt-png");
// const connectToSend = require("../helpers/send");
const RabbitMqHelper = require("../helpers/rabbitMqHelper");
const csv = require("csvtojson");
const _ = require("lodash");

class TopicDomain {
  async getObj(req, res) {
    const module = await Module.findById(req.moduleId).populate("tech");

    //if not in db return
    if (!module)
      return res.status(404).send("Module with given id not found!!!");

    return module;
  }

  //To get plans
  async getTopics(req, res) {
    try {
      //get tech and module
      const module = await this.getObj(req, res);

      //check if id given
      if (req.params.id) {
        //get data with id
        const topic = await module.topics.id(req.params.id);

        //if not in db return
        if (!topic)
          return res.status(404).send("Topic with given id not found!!!");

        //response
        res.send(topic);
      } else {
        const topics = await module.topics;
        //response
        res.send(topics);
      }
    } catch (error) {
      res.send(error);
    }
  }

  //To insert module
  async insertTopic(req, res) {
    try {
      //get tech and module
      const module = await this.getObj(req, res);
      const tech = module.tech;

      // debug(req.files);
      // debug(req.body);
      // debug(module);

      //validate user input
      // const { error } = await validate(req.body);

      //if error return
      // if (error) return res.status(400).send(error.details[0].message);

      let topic = module.topics.create({ topic: req.body.topic });
      module.topics.push(topic);
      await module.save();

      const rabbitMqHelper = new RabbitMqHelper();

      if (!req.files) {
        debug("ppt");
        topic.contents = req.body.contents;
        await module.save();
      } else if (module.moduleType !== "ppts") {
        debug("videos");
        const topicId = topic._id;
        let filepath, fileNameKey, myMsg;

        //queue producer
        const channel = await rabbitMqHelper.producer();

        req.files.forEach(async (element) => {
          debug(element);
          filepath = path.join(element.destination, element.filename);
          // filepath = `${element.destination}/${element.filename}`;

          fileNameKey = `${tech.name}/${module.name}/${req.body.topic}/${element.originalname}`;

          myMsg = {
            filePath: filepath,
            fileName: fileNameKey,
            moduleId: module._id,
            topicId: topicId,
            contentName: element.originalname,
          };

          debug("inside for", JSON.stringify(myMsg));
          await channel.sendToQueue(
            "upload",
            Buffer.from(JSON.stringify(myMsg))
          );
          debug("message sent");
        });
      }

      debug(topic);
      //response
      res.send(topic);
    } catch (error) {
      res.send(error);
    }
  }

  //insert multiple topics
  async insertMultipleTopics(req, res) {
    try {
      //get tech and module
      const module = await this.getObj(req, res);

      debug(req.file);

      const jsonArray = await csv().fromFile(req.file.path);
      debug(jsonArray);

      const topicsArr = [];

      jsonArray.forEach(async (item) => {
        let topic = module.topics.find((t) => t.topic === item.topic);
        debug(topic);
        if (!topic) {
          topic = module.topics.create({
            topic: item.topic,
            contents: [
              {
                contentName: item.contentName,
                contentUrl: item.contentUrl,
              },
            ],
          });

          topicsArr.push(topic);
          module.topics.push(topic);
        } else {
          let content = topic.contents.create({
            contentName: item.contentName,
            contentUrl: item.contentUrl,
          });
          topic.contents.push(content);
          topicsArr.map((t) => (t._id === topic._id ? topic : t));
        }
      });

      fs.unlink(req.file.path, (err) => {
        if (err) debug(err);
        else debug("csv file deleted");
      });

      // plan.days.push(topicsArr);

      // await plan.save();

      debug("topicsArr: ", topicsArr);
      await module.save();

      //response
      res.json({ topicsArr });
    } catch (error) {
      debug(error);
      res.json({ err: error });
    }
  }

  //To update module
  async updateTopic(req, res) {
    try {
      //get tech and module
      const module = await this.getObj(req, res);

      //validate user input
      // const { error } = await validate(req.body);

      //if error return
      // if (error) return res.status(400).send(error.details[0].message);

      //get data with id
      const topic = await module.topics.id(req.params.id);

      //if not in db return
      if (!topic)
        return res.status(404).send("Topic with given id not found!!!");

      //update
      topic.topic = req.body.topic;

      //save
      await module.save();

      //response
      res.send(topic);
    } catch (error) {
      res.send(error);
    }
  }

  //To delete module
  async deleteTopic(req, res) {
    try {
      //get tech and module
      const module = await this.getObj(req, res);

      //get data with id
      const topic = await module.topics.id(req.params.id);

      //if not in db return
      if (!topic)
        return res.status(404).send("Topic with given id not found!!!");

      if (module.moduleType !== "ppts") {
        const rabbitMqHelper = new RabbitMqHelper();
        const channel = await rabbitMqHelper.producer();

        debug(topic);

        topic.contents.forEach(async (element) => {
          await channel.sendToQueue("delete", Buffer.from(element.contentUrl));
          // data = await awsHelper.delelteFile(element.contentUrl);
          // console.log(element.contentUrl);
        });
      }

      topic.remove();

      module = await module.save();

      //response
      res.send(topic);
    } catch (error) {
      res.send(error);
    }
  }
}

module.exports = TopicDomain;
