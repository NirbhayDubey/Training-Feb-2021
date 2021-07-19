const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/instagram', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err));


const userSchema = new mongoose.Schema({
    userID: {
        type: String,
        required: true
    },
    userPWD: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    location: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    phoneNO: {
        type: Number,
        validate: {
            validator: function (v) {
                return /\d{10}/.test(v);
            },
            message: '{VALUE} is not a valid 10 digit number!'
        },
        required: true
    },
    profilePic: {
        type: String,
        default: "def1.png"
    },
    followers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'userAccount'
    }],
    following: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'userAccount'
    }]
})


const user = mongoose.model('userAccount', userSchema)
module.exports = user

/*
{
        "userID" : "shweta_",
        "userPWD" : "1234",
        "userName" : "pathak shweta",
        "email" : "ps7@gmail.com",
        "location" : "gandhinagar",
        "dateOfBirth" : "1998-07-29",
        "gender" : "female",
        "phoneNO" : 9134843529
}

http://localhost:80/uploads\1623316501923_gtu.jpg

*/

