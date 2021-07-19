const debug = require("debug")("rx:video");
const {
  Technology,
  validateContents: validate,
} = require("../models/technology");
const fs = require("fs");
const path = require("path");

const connectToSend = require("../helpers/send");

class VideoDomain {
  //To get plans
  async getTopics(req, res) {
    try {
      //get data with id
      let tech = await Technology.findById(req.techId);
      const Tech = await Technology.find();

      //check if id given
      if (req.params.id) {
        res.send(req.params.id);
        //get data with id
        const topic = await tech.videos.id(req.params.id);

        //if not in db return
        if (!topic)
          return res.status(404).send("Module with given id not found!!!");

        //response
        res.render("pages/videos", { topic, Tech });
      } else {
        const topics = await tech.videos;
        //response
        res.render("pages/videos", {
          modules: topics,
          Tech,
          techName: await tech.name,
          techId: await tech._id,
          User: req.user,
        });
      }
    } catch (error) {
      res.send(error);
    }
  }

  //To insert module
  async insertTopic(req, res) {
    try {
      // console.log(req.files);

      // console.log(req.url);
      //get data with id
      let tech = await Technology.findById(req.techId);

      //validate user input
      const { error } = await validate(req.body);

      //if error return
      if (error) return res.status(400).send(error.details[0].message);

      let video = tech.videos.create({ topic: req.body.topic });

      tech.videos.push(video);
      tech = await tech.save();
      const videoId = video._id;
      let filepath, fileNameKey, myMsg;

      const channel = await connectToSend();

      req.files.forEach(async (element) => {
        debug(element);
        filepath = path.join(element.destination, element.filename);
        // filepath = `${element.destination}/${element.filename}`;

        fileNameKey = `${tech.name}/${req.body.topic}/${element.originalname}`;

        myMsg = {
          filePath: filepath,
          fileName: fileNameKey,
          techId: req.techId,
          topicId: videoId,
          contentName: element.originalname,
        };

        debug("inside for", JSON.stringify(myMsg));
        await channel.sendToQueue("upload", Buffer.from(JSON.stringify(myMsg)));
        debug("message sent");
      });

      //response
      res.redirect("back");
    } catch (error) {
      res.send(error);
    }
  }

  //To update module
  async updateTopic(req, res) {
    try {
      //get data with id
      let tech = await Technology.findById(req.techId);

      //validate user input
      const { error } = await validate(req.body);

      //if error return
      if (error) return res.status(400).send(error.details[0].message);

      //get data with id
      const topic = await tech.videos.id(req.params.id);

      //if not in db return
      if (!topic)
        return res.status(404).send("Topic with given id not found!!!");

      //update
      topic.topic = req.body.topic;

      //save
      tech = await tech.save();

      //response
      res.redirect("back");
    } catch (error) {
      res.send(error);
    }
  }

  //To delete module
  async deleteTopic(req, res) {
    try {
      //get data with id
      let tech = await Technology.findById(req.techId);

      //get data with id
      const topic = await tech.videos.id(req.params.id);

      //if not in db return
      if (!topic)
        return res.status(404).send("Module with given id not found!!!");

      const channel = await connectToSend();

      debug(topic);

      topic.contents.forEach(async (element) => {
        await channel.sendToQueue("delete", Buffer.from(element.contentUrl));
        // data = await awsHelper.delelteFile(element.contentUrl);
        // console.log(element.contentUrl);
      });

      topic.remove();

      tech = await tech.save();

      //response
      res.redirect("back");
    } catch (error) {
      res.send(error);
    }
  }
}

module.exports = VideoDomain;
