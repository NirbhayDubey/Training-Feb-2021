const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/instagram', { useNewUrlParser: true, useUnifiedTopology: true })
   .then(() => console.log('Connected to MongoDB...'))
   .catch(err => console.error('Could not connect to MongoDB...', err));


const storySchema = new mongoose.Schema({
   photo: {
      type: String,
      required: true
   },
   postedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "userAccount"
   }
}, { timestamps: true })


const story = mongoose.model('userStory', storySchema)
module.exports = story



