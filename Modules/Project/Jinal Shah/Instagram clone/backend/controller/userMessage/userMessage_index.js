var express = require('express');
var router = express.Router();

const MessageDomain = require("../../Domain/Message_Domain")
const login = require('../Login/login')
const security = require('../../Authenticator/security')

class MessageController {

   static async getById(req, res) {
      const domain = new MessageDomain();
      domain.getById(req, res)
   }

   static async getAll(req, res) {
      const domain = new MessageDomain();
      domain.getAll(req, res)
   }

   static async insert(req, res) {
      const domain = new MessageDomain();
      domain.insert(req, res)
   }

}

router.use(security)

router.post('/', MessageController.insert)
router.get('/', MessageController.getAll)
router.get('/:id', MessageController.getById)

module.exports = router