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

    console.log("waiting for the msg");

    channel.consume("rabbit", (data) => {
      console.log(data.content.toString());
      channel.ack(data);
    });
  } catch (error) {
    console.log(error);
  }
}

app.get("send", (req, res) => {});

app.listen("5002", () => console.log("server 1 listening on port 5002"));
