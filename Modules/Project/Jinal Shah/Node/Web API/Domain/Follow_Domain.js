const f1 = require('../models/FollowModel')

class FollowDomain {

    async all(req, res) {
        const sdata = await f1.find().populate('ID followers followings', 'userID -_id')
        var i = 0;
        var data = [];
        for (i; i < sdata.length; i++) {
            var v1 = sdata[i]
            data.push(v1)
        }
        if (data.length == 0) res.send('Record not found..')
        res.send(data)
    }

    /* async all(req, res) {
        const sdata = await f1.find().populate('ID followers followings', 'userID -_id')
        var i = 0;
        var data = [];
        for (i; i < sdata.length; i++) {
            var v1 = "UserID = " + sdata[i].ID + " Followers = " + sdata[i].followers + " Followings = " +
                sdata[i].followings
            data.push(v1)
        }
        if (data.length == 0) res.send('Record not found..')
        res.send(data)

        //res.send("UserID = " + sdata[0].ID + "<br>Followers = " + sdata[0].followers + "<br>Followings = " + sdata[0].followings)
    } */

    async id(req, res) {
        const ID1 = req.params.id
        const sdata = await f1.find().populate('ID followers followings', 'userID -_id')
        var index;
        var i = 0;
        var data = [];
        for (i; i < sdata.length; i++) {
            var v2 = sdata[i].ID.userID
            if (v2 === ID1) {
                index = i;
                var v1 = "UserID = " + sdata[i].ID + " Followers = " + sdata[i].followers + " Followings = " + sdata[i].followings
                data.push(v1)
            }
        }
        if (data.length == 0) res.send('Record not found..')
        res.send("UserID = " + sdata[index].ID + "<br>Followers = " + sdata[index].followers + "<br>Followings = " + sdata[index].followings)
    }

    async follower(req, res) {
        const ID1 = req.params.id
        const sdata = await f1.find().populate('ID followers followings', 'userID -_id')
        var index;
        var i = 0;
        var data = [];
        for (i; i < sdata.length; i++) {
            var v2 = sdata[i].ID.userID
            if (v2 === ID1) {
                index = i;
                var v1 = "UserID = " + sdata[i].ID + " Followers = " + sdata[i].followers + " Followings = " +
                    sdata[i].followings
                data.push(v1)
            }
        }
        if (data.length == 0) res.send('Record not found..')
        res.send("Followers = " + sdata[index].followers)
    }

    async following(req, res) {
        const ID1 = req.params.id
        const sdata = await f1.find().populate('ID followers followings', 'userID -_id')
        var index;
        var i = 0;
        var data = [];
        for (i; i < sdata.length; i++) {
            var v2 = sdata[i].ID.userID
            if (v2 === ID1) {
                index = i;
                var v1 = "UserID = " + sdata[i].ID + " Followers = " + sdata[i].followers + " Followings = " +
                    sdata[i].followings
                data.push(v1)
            }
        }
        if (data.length == 0) res.send('Record not found..')
        res.send("Followings = " + sdata[index].followings)
    }

    async insert(req, res) {
        const newdata = req.body
        const data1 = new f1(newdata)
        /*  const result = await data1.save();
         res.send(result) */
        try {
            const result = await data1.save();
            res.send(result)
        }
        catch (ex) {
            for (let field in ex.errors)
                console.log(ex.errors[field].message)
        }
    }

    async update(req, res) {

        const ID1 = req.params.id
        const sdata = await f1.find().populate('ID followers followings')
        var index;
        var i = 0;
        var data = [];
        for (i; i < sdata.length; i++) {
            var v2 = sdata[i].ID.userID
            if (v2 === ID1) {
                index = i;
                var v1 = sdata[i]
                data.push(v1)
            }
        }
        if (data.length == 0) res.send('Record not found..')
        const newdata = req.body

        for (let i in newdata) {
            data[0][i] = newdata[i]
        }
        try {
            const result = await data[0].save();
            res.send(result)
        }
        catch (ex) {
            for (let field in ex.errors)
                console.log(ex.errors[field].message)
        }
    }

    async delete(req, res) {

        const ID1 = req.params.id
        const sdata = await f1.find().populate('ID followers followings')
        var i = 0;
        for (i; i < sdata.length; i++) {
            var v2 = sdata[i].ID.userID
            if (v2 === ID1) {
                var v1 = sdata[i]._id
                //data.push(v1)
            }
        }
        if (v1 == 0) res.send('Record not found..')
        console.log(v1)

        const result = await f1.deleteOne({ "_id": v1 });
        res.send(result)
    }
}

module.exports = FollowDomain