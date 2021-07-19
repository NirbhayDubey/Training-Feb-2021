const express = require("express");
const amqp = require("amqplib");

const app = express();

var channel, connection;

connect();

async function connect() {
  try {
    const amqpServer = "amqp://localhost";
    connection = await amqp.connect(amqpServer);
    channel = await connection.createChannel();
    await channel.assertQueue("rabbit");
  } catch (error) {
    console.log(error);
  }
}

app.get("/send", async (req, res) => {
  const fakeData = {
    name: "Elon Musk",
    company: "SpaceX",
  };

  await channel.sendToQueue("rabbit", Buffer.from(JSON.stringify(fakeData)));
  // await channel.close();
  // await connection.close();

  res.send("Message sent.");
});

app.listen("5001", () => console.log("server 1 listening on port 5001"));
