var express = require('express');
var router = express.Router();

const studentDomain = require('../Domain/StudentDomain')

class studentController {

   static async get(req, res) {
      const domain = new studentDomain();
      domain.all(req, res)
   }

   static async getById(req, res) {
      const domain = new studentDomain();
      domain.getById(req, res)
   }

   static async insert(req, res) {
      const domain = new studentDomain();
      domain.insert(req, res)
   }

   static async update(req, res) {
      const domain = new studentDomain();
      domain.update(req, res)
   }

   static async delete(req, res) {
      const domain = new studentDomain();
      domain.delete(req, res)
   }

}

router.get('/', studentController.get)
router.get('/:id', studentController.getById)
router.post('/', studentController.insert)
router.put('/:id', studentController.update)
router.delete('/:id', studentController.delete)

module.exports = router