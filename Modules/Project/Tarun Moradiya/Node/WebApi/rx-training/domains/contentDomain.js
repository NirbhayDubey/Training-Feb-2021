const debug = require("debug")("rx:content");
const { Module } = require("../models/module");

const fs = require("fs");
const path = require("path");
// const connectToSend = require("../helpers/send");
const RabbitMqHelper = require("../helpers/rabbitMqHelper");

class ContentDomain {
  async getObj(req, res) {
    const module = await Module.findById(req.moduleId).populate("tech");
    const tech = module.tech;

    //if not in db return
    if (!module)
      return res.status(404).send("Module with given id not found!!!");

    //get data with id
    const topic = await module.topics.id(req.topicId);

    //if not in db return
    if (!topic) return res.status(404).send("Topic with given id not found!!!");
    return { module, topic };
  }

  //To get contents
  async getContents(req, res) {
    try {
      //get tech, module and topic
      const { module, topic } = await this.getObj(req, res);

      //check if id given
      if (req.params.id) {
        //get data with id
        const content = await topic.contents.id(req.params.id);

        //if not in db return
        if (!content)
          return res.status(404).send("Content with given id not found!!!");

        fs.readFile(content.contetnUrl, (err, data) => {
          if (err) debug(err);
          else res.send(data);
        });

        //response
        // res.send(content);
      } else {
        //get all contents
        const contents = await topic.contents;
        //response
        res.send(contents);
      }
    } catch (error) {
      res.send(error);
    }
  }

  //To insert contents
  async insertContent(req, res) {
    try {
      debug("inserting...");
      //get tech, module and topic
      const { module, topic } = await this.getObj(req, res);
      // debug(topic, module);
      const tech = module.tech;
      //validate user input
      // const { error } = await validate(req.body);

      //if error return
      // if (error) return res.status(400).send(error.details[0].message);

      // debug(req.file);

      if (!req.file) {
        debug("saving ppt url");
        const content = await topic.contents.create({
          contentName: req.body.contentName,
          contentUrl: req.body.content,
        });

        await topic.contents.push(content);

        await module.save();

        res.send(content);
      } else if (module.moduleType !== "ppts") {
        const filepath = path.join(req.file.destination, req.file.filename);

        const filename = `${tech.name}/${module.name}/${topic.topic}/${req.file.originalname}`;

        //queue producer
        const rabbitMqHelper = new RabbitMqHelper();
        const channel = await rabbitMqHelper.producer();

        const myMsg = {
          filePath: filepath,
          fileName: filename,
          moduleId: module._id,
          topicId: topic._id,
          contentName: req.body.contentName,
        };
        debug(myMsg);
        await channel.sendToQueue("upload", Buffer.from(JSON.stringify(myMsg)));
        debug("message sent");

        //response
        res.send(false);
      }
    } catch (error) {
      res.send(error);
    }
  }

  //To update content
  async updateContent(req, res) {
    try {
      //get tech, module and topic
      const { module, topic } = await this.getObj(req, res);
      debug("updating...");

      //validate user input
      // const { error } = await validate(req.body);

      //if error return
      // if (error) return res.status(400).send(error.details[0].message);

      //get data with id
      const content = await topic.contents.id(req.params.id);

      //if not in db return
      if (!content)
        return res.status(404).send("Content with given id not found!!!");

      //update
      content.contentName = req.body.contentName;

      //save
      await module.save();

      debug(module);

      //response
      res.send(content);
    } catch (error) {
      res.send(error);
    }
  }

  //To delete content
  async deleteContent(req, res) {
    try {
      //get tech, module and topic
      const { module, topic } = await this.getObj(req, res);

      //get data with id
      const content = await topic.contents.id(req.params.id);

      //if not in db return
      if (!content)
        return res.status(404).send("Content with given id not found!!!");

      if (module.moduleType !== "ppts") {
        //queue producer
        const rabbitMqHelper = new RabbitMqHelper();
        const channel = await rabbitMqHelper.producer();

        await channel.sendToQueue("delete", Buffer.from(content.contentUrl));
      }

      content.remove();

      await module.save();
      //response
      res.send(content);
    } catch (error) {
      res.send(error);
    }
  }
}

module.exports = ContentDomain;
