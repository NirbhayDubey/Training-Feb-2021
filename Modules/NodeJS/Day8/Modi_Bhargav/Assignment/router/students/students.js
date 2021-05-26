const student = require('../../student.json')
const express = require("express");
const jwt = require('jsonwebtoken');
const fs = require('fs');
const router2 = express.Router();
const stdFees = require('./stdFees/fees')
const stdResult = require('./stdResult/result')
class Students {
  static StudentList(req, res) {
    res.send(student);
    res.end();
  };

  static StudentFind(req, res) {
    if (req.params.id) {
      let studentData = student.find(f => f.ID === parseInt(req.params.id))
      if (!studentData) res.status(404).send("Your Id Is Not Found")
      return res.status(200).send(studentData);
    }
  }
  static InsertData(req, res) {
    const NewStd = req.body
    student.push(NewStd)
    fs.writeFile('./student.json', JSON.stringify(student), (error) => {
      console.log(error)
    });
    res.send(student);
    res.end();
  };
  static UpdateData(req, res) {
    if (req.params.id) {
      const Std = employee.find(u => u.ID === parseInt(req.params.id))
      if (!Std) res.status(404).send("Your Id Is Not Found")

      const newData = req.body
      for (let i in newData) {
        Std[i] = newData[i]
      }
      fs.writeFile('./student.json', JSON.stringify(student), (error) => {
        console.log(error)
      });
      res.send(student);
      res.end();
    }
  }
  static DeleteData(req, res) {
    if (req.params.id) {
      let stdData = student.find(d => d.ID == parseInt(req.params.id))
      if (!stdData) res.status(404).send("Your Id Is Not Found")
      let index = employee.indexOf(stdData)
      student.splice(index, 1)
      fs.writeFile('./student.json', JSON.stringify(student), (error) => {
        console.log(error)
      });
      res.send(student)
      res.end()
    }
  }
}

router2.get('/all', Students.StudentList);
router2.get('/:id', Students.StudentFind);
router2.post('/all', Students.InsertData);
router2.put('/:id', Students.UpdateData);
router2.delete('/:id', Students.DeleteData);

router2.use('/:id/child/fees', stdFees);
router2.use('/:id/child/result', stdResult);


module.exports = router2;
