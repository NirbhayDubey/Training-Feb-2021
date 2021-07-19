const express = require('express')
const router = express.Router()

const security = require('../Authenticator/security')
const login = require('./Login/login')

const userAcc = require('./userAccount/user_index')
const userPost = require('./userPosts/post_index')
const userConversation = require('./userConversation/conversation_index')
const userMessage = require('./userMessage/userMessage_index')
const userStory = require('./userStory/Story_index')

router.use('/userAccounts', userAcc)

router.use('/login', login)
router.use(security)

router.use('/userPost', userPost)
router.use('/userStory', userStory)
router.use('/conversation', userConversation)
router.use('/message', userMessage)

module.exports = router
