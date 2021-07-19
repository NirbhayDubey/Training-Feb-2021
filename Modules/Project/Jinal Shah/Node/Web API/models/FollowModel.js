const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/instagram', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

const followSchema = new mongoose.Schema({
    ID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'userAccount'
    },
    followers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'userAccount'
    }],
    followings: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'userAccount'
    }]
})

const follow = mongoose.model('followInfo', followSchema)
module.exports = follow

async function addUser() {

    const d1 = new follow({
        ID: '60867cdf1c76210870718212',
        followers: ['60867b73db9bb103bceeb364', '60867c8b1c76210870718211', '60867d341c76210870718213'],
        followings: ['60867b73db9bb103bceeb364', '60867d341c76210870718213']
    });

    try {
        const result = await d1.save();
        console.log(result)
    }
    catch (ex) {
        for (field in ex.errors)
            console.log(ex.errors[field].message)
    }
}

//addUser()

/*

{
    "ID" : "60a107deef87be289cdf6beb",  //jinal
    "followers" :["60a1100f0be7263bc44cb773","60a110a90be7263bc44cb774"],
    "followings" : ["60a1100f0be7263bc44cb773"]  //jiya
}

{
    "ID" : "60a1100f0be7263bc44cb773",  //jiya
    "followers" :["60a107deef87be289cdf6beb","60a110a90be7263bc44cb774"],
    "followings" : ["60a107deef87be289cdf6beb","60a110a90be7263bc44cb774"]
}

*/