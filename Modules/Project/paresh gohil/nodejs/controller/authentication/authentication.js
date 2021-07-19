require('dotenv').config()
const jwt = require("jsonwebtoken")

module.exports = function authenticateToken(req, res, next) {
    
    //pass token in post when function call and select authorization
    const authHeader = req.headers['authorization']
    
    //token = Barear Token
    const token = authHeader && authHeader.split(' ')[1] 
    if(token == null)return res.sendStatus(401)

    //verify token
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, student) => {
        if(err) return res.sendStatus(403)
        req.student = student
        next()
    })
}

