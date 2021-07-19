const express = require("express")
const app = express()
const router = express.Router()
const {Student} = require("../../model/student")

app.use(express.json())

//----------class----------------
class students{
    static all(req,res){
        async function getall() {
            const students1 = await Student.find()
            res.send(students1)
        }
        getall()
    }

    static one(req,res){
        async function getone() {
            const students1 = await Student.find({"id": req.params.id})
            res.send(students1)
        }
        getone()
    }

    static posts(req,res){
        async function studentpost() {
            const students1 = req.body
            const students2 = new Student(students1)
            const result = await students2.save() 
            res.send(result)
        }
        studentpost()
    }

    static puts(req,res){
        async function studentput() {
            const students3 = Student.find({"id": req.params.id})
            const students4 = await Student.updateOne(students3,req.body)
            res.send(students4)
        }
        studentput()
    }

    static deletes(req,res){
        async function studentdelete() {
            const students5 = Student.find({"id": req.params.id})
            const students6 = await Student.deleteOne(students5)
            res.send(students6)
        }
        studentdelete()
    }
}


//------------get,post,put and delete-------------------
router.get("/",students.all)

router.get("/:id",students.one)

router.post("/", students.posts)

router.put("/:id",students.puts)

router.delete("/:id",students.deletes)


//---------------router---------------
module.exports = router
