const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/instagram', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err));


const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: true
    },
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'userAccount'
    }],
    comments: [{
        text: String,
        postedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "userAccount"
        }
    }],
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "userAccount"
    }
}, { timestamps: true })


const post = mongoose.model('userPost', postSchema)
module.exports = post



