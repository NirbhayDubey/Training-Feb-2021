const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/instagram', { useNewUrlParser: true, useUnifiedTopology: true })
   .then(() => console.log('Connected to MongoDB...'))
   .catch(err => console.error('Could not connect to MongoDB...', err));

const MessageSchema = new mongoose.Schema({

   conversationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Conversation'
   },
   sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'userAccount'
   },
   text: {
      type: String,
   }

}, { timestamps: true })

module.exports = mongoose.model("Message", MessageSchema);