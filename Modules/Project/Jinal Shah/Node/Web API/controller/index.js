const express = require('express')
const router = express.Router()

const security = require('../Authenticator/security')
const login = require('./Login/login')

const userAcc = require('./userAccount/user_index')
const userPost = require('./userPosts/post_index')
const followInfo = require('./FollowInfo/Follow_Index')

router.use('/userAccounts', userAcc)

//router.use('/login',login)
//router.use(security) 

router.use('/userPost', userPost)
router.use('/follow', followInfo)


module.exports = router
