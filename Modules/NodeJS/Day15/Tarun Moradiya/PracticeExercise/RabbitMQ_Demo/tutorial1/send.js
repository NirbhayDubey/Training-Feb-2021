
var amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', function(error0, connection) {
    if (error0) {
        throw error0;
    }
    connection.createChannel(function(error1, channel) {
        if (error1) {
            throw error1;
        }

        var queue = 'hello';
        var msg = 'Hello World!';

        channel.assertQueue(queue, {
            durable: false
        });
        channel.sendToQueue(queue, Buffer.from(msg));

        console.log(" [x] Sent %s", msg);
    });
    setTimeout(function() {
        connection.close();
        process.exit(0);
    }, 500);
});



//C:\Program Files\RabbitMQ Server\rabbitmq_server-3.8.14\sbin>rabbitmqctl status
//C:\Program Files\RabbitMQ Server\rabbitmq_server-3.8.14\sbin>rabbitmq-plugins enable rabbitmq_management
//C:\Program Files\RabbitMQ Server\rabbitmq_server-3.8.14\sbin>rabbitmq-service stop
//C:\Program Files\RabbitMQ Server\rabbitmq_server-3.8.14\sbin>rabbitmq-service start
//Interface: 0.0.0.0, port: 15672, protocol: http, purpose: HTTP API