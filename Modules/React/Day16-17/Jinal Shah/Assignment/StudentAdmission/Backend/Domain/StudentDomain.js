const studentData = require('../Models/StudentModel');

class Logic {

   async all(req, res) {
      const sdata = await studentData.find()
      try {
         if (sdata.length == 0) res.status(404).send("Data not found..")
         res.send(sdata)
      }
      catch (ex) {
         for (let field in ex.errors)
            console.log(ex.errors[field].message)
      }
   }

   async getById(req, res) {
      const ID1 = req.params.id
      const sdata = await studentData.find({ Enrollment: ID1 })
      if (sdata.length == 0) res.status(404).send("user not found..")
      res.send(sdata)
   }

   async insert(req, res) {
      const newdata = req.body
      const data1 = new studentData(newdata)
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
      const ID1 = parseInt(req.params.id)
      const selData = await studentData.find({ Enrollment: ID1 })
      if (selData.length == 0) res.status(404).send("Student with this Enrollment number not found..")
      const newdata = req.body
      for (let i in newdata) {
         selData[0][i] = newdata[i]
      }
      try {
         const result = await selData[0].save();
         res.send(result)
      }
      catch (ex) {
         for (let field in ex.errors)
            console.log(ex.errors[field].message)
      }
   }

   async delete(req, res) {
      const ID1 = req.params.id
      const selData = await studentData.find({ Enrollment: ID1 })
      if (selData.length == 0) res.status(404).send("Student with this Enrollment number not found..")
      const remove = await studentData.remove({ Enrollment: ID1 })
      res.send(remove)
   }

}

module.exports = Logic