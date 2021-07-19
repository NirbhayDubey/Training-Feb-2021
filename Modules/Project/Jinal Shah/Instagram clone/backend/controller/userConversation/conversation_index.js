var express = require('express');
var router = express.Router();

const ConversationDomain = require("../../Domain/Conversation_Domain")
const login = require('../Login/login')
const security = require('../../Authenticator/security')

class conversationController {

   static async getById(req, res) {
      const domain = new ConversationDomain();
      domain.getById(req, res)
   }

   static async getAll(req, res) {
      const domain = new ConversationDomain();
      domain.getAll(req, res)
   }

   static async insert(req, res) {
      const domain = new ConversationDomain();
      domain.insert(req, res)
   }

   static async group(req, res) {
      const domain = new ConversationDomain();
      domain.group(req, res)
   }

   static async delete(req, res) {
      const domain = new ConversationDomain();
      domain.delete(req, res)
   }

}

router.use(security)

router.post('/', conversationController.insert)
router.post('/group', conversationController.group)
router.get('/', conversationController.getAll)
router.get('/:id', conversationController.getById)
router.delete('/:id', conversationController.delete)

module.exports = router