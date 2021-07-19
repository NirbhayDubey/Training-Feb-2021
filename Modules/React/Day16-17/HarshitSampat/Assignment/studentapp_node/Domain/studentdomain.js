const {Student} = require('../Model/studentModel')

class StudentDomain{

    //add student 
    async addStudent(req,res){
        const newStudent = req.body
        const student = new Student(newStudent)
        try{
            const result = await student.save() 
            res.send(result)
        }
        catch(e){
            res.status(500).send(e.message)
        }
    }
    
    //get all student
    async getAllStudents(req,res){
        const students= await Student.find()
        res.send(students)
    }

    //get student by id
    async getStudentById(req,res)
    {
        const stundentId = req.params.id;
        const student = await Student.findById(stundentId);

        if(!student)
        {
        return res.status(404).send("Student not found");
        }      
        
        res.send(student);
    }

    //update student
    async updateStudent(req,res)
    {
        const StudentId = req.params.id;
        const newStudent = req.body;

        const student = await Student.findById(StudentId);
        if(!student){
            return res.status(404).send("Student not found");
        }   
        try{
            student.set({
                ...newStudent
            })
            await student.save();
            res.send(student)
        }

        catch(e){
            res.status(500).send(e)
        }
    }

    //delete student
    async deleteStudent(req,res){
        const studentId = req.params.id;
        
        const result = await Student.deleteOne({_id:studentId});

        if(result.deletedCount == 0){
            return res.send(404).send("Student not found")
        }else{
            res.send("Student deleted successfully")
        }
    }
}
module.exports = StudentDomain