var amqp = require("amqplib");
var debug = require("debug")("rx:send");

async function connect() {
  return new Promise(async (resolve, reject) => {
    try {
      const amqpServer = "amqp://localhost";
      const connection = await amqp.connect(amqpServer);
      const channel = await connection.createChannel();

      debug("connected");

      await channel.assertQueue("upload");
      await channel.assertQueue("delete");

      resolve(channel);
    } catch (error) {
      debug(error);
      reject(new Error(error));
    }
  });
}

module.exports = connect;
