const debug = require("debug")("rx:content");
const { models } = require("mongoose");
const {
  Technology,
  validateContent: validate,
} = require("../models/technology");
const fs = require("fs");
const path = require("path");
const connectToSend = require("../helpers/send");

class VideoContentDomain {
  //To get contents
  async getContents(req, res) {
    try {
      //get data with id
      let tech = await Technology.findById(req.techId);

      //check module
      let module = await tech.videos.id(req.videoId);

      //check if id given
      if (req.params.id) {
        //get data with id
        const content = await module.contents.id(req.params.id);

        //if not in db return
        if (!content)
          return res.status(404).send("Content with given id not found!!!");

        //response
        res.send(content);
      } else {
        //get all contents
        const contents = await module.contents;
        //response
        res.send(contents);
      }
    } catch (error) {
      res.send(error);
    }
  }

  //To insert contents
  async insertContents(req, res) {
    try {
      //get data with id
      let tech = await Technology.findById(req.techId);

      //check module
      let module = await tech.videos.id(req.videoId);

      //validate user input
      const { error } = await validate(req.body);

      //if error return
      if (error) return res.status(400).send(error.details[0].message);

      debug(req.file);

      const filepath = path.join(req.file.destination, req.file.filename);

      const filename = `${tech.name}/${module.topic}/${
        req.body.contentName
      }${path.extname(req.file.originalname)}`;

      const channel = await connectToSend();

      const myMsg = {
        filePath: filepath,
        fileName: filename,
        techId: req.techId,
        topicId: req.videoId,
        contentName: req.body.contentName,
      };
      debug(myMsg);
      await channel.sendToQueue("upload", Buffer.from(JSON.stringify(myMsg)));
      debug("message sent");
      //response
      res.redirect("back");
    } catch (error) {
      res.send(error);
    }
  }

  //To update content
  async updateContent(req, res) {
    try {
      //get data with id
      let tech = await Technology.findById(req.techId);

      //check module
      let module = await tech.videos.id(req.videoId);

      //validate user input
      const { error } = await validate(req.body);

      //if error return
      if (error) return res.status(400).send(error.details[0].message);

      //get data with id
      content = await module.contents.id(req.params.id);

      //if not in db return
      if (!content)
        return res.status(404).send("Content with given id not found!!!");

      //update
      content.contentName = req.body.contentName;

      //save
      tech = await tech.save();

      //response
      res.redirect("back");
    } catch (error) {
      res.send(error);
    }
  }

  //To delete content
  async deleteContent(req, res) {
    try {
      //get data with id
      let tech = await Technology.findById(req.techId);

      //check module
      let module = await tech.videos.id(req.videoId);

      //get data with id
      const content = await module.contents.id(req.params.id);

      //if not in db return
      if (!content)
        return res.status(404).send("Content with given id not found!!!");

      const channel = await connectToSend();

      await channel.sendToQueue("delete", Buffer.from(content.contentUrl));

      content.remove();

      tech = await tech.save();
      //response
      res.redirect("back");
    } catch (error) {
      res.send(error);
    }
  }
}

module.exports = VideoContentDomain;
