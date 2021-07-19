var express = require('express');
var router = express.Router();

const FollowDomain = require("../../Domain/Follow_Domain")

class FollowController {

    static async get(req, res) {
        const domain = new FollowDomain();
        domain.all(req, res)
    }

    static async getbyid(req, res) {
        const domain = new FollowDomain();
        domain.id(req, res)
    }

    static async follower(req, res) {
        const domain = new FollowDomain();
        domain.follower(req, res)
    }

    static async following(req, res) {
        const domain = new FollowDomain();
        domain.following(req, res)
    }

    static async insert(req, res) {
        const domain = new FollowDomain();
        domain.insert(req, res)
    }

    static async update(req, res) {
        const domain = new FollowDomain();
        domain.update(req, res)
    }

    static async delete(req, res) {
        const domain = new FollowDomain();
        domain.delete(req, res)
    }

}

router.get('/', FollowController.get)
router.get('/:id', FollowController.getbyid)
router.get('/:id/follower', FollowController.follower)
router.get('/:id/following', FollowController.following)

router.post('/', FollowController.insert)
router.put('/:id', FollowController.update)
router.delete('/:id', FollowController.delete)

module.exports = router