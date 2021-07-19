var express = require('express');
var router = express.Router();

const userAccount_Domain = require("../../Domain/userAccount_Domain")
const login = require('../Login/login')
const security = require('../../Authenticator/security')

class userAccountController {

    static async get(req, res) {
        const domain = new userAccount_Domain();
        domain.all(req, res)
    }

    static async getbyid(req, res) {
        const domain = new userAccount_Domain();
        domain.getbyid(req, res)
    }

    static async insert(req, res) {
        const domain = new userAccount_Domain();
        domain.insert(req, res)
    }

    static async update(req, res) {
        const domain = new userAccount_Domain();
        domain.update(req, res)
    }

    static async delete(req, res) {
        const domain = new userAccount_Domain();
        domain.delete(req, res)
    }

    static async follower(req, res) {
        const domain = new userAccount_Domain();
        domain.follower(req, res)
    }

    static async verify(req, res) {
        const domain = new userAccount_Domain();
        domain.verify(req, res)
    }

}

router.post('/signup', userAccountController.insert)
router.get('/signup/verify/:id', userAccountController.verify)
router.use('/signin', login)

//router.use(security)

router.get('/', userAccountController.get)
router.get('/:id', userAccountController.getbyid)
router.put('/:id', userAccountController.update)
router.delete('/:id', userAccountController.delete)

module.exports = router