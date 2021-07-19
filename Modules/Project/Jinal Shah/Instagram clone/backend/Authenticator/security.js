var jwt = require('jsonwebtoken')

const config = require('../static/config')

function verify(req,res,next){
    var token = req.headers["token"]
    //console.log(token)

    jwt.verify(token, global.config.secretKey,{
        algorithm : global.config.algorithm
    },
    function (err, data){
        if(err) {
            res.status(403).send('Please login first !!')
        }
        req.data = data
        //console.log(data)
        next()
    }
    )
}

module.exports = verify