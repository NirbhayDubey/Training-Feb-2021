const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/instagram', { useNewUrlParser: true, useUnifiedTopology: true })
   .then(() => console.log('Connected to MongoDB...'))
   .catch(err => console.error('Could not connect to MongoDB...', err));

const ConversationSchema = new mongoose.Schema({

   members: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'userAccount',
      unique: true
   }]

}, { timestamps: true })

module.exports = mongoose.model("Conversation", ConversationSchema);