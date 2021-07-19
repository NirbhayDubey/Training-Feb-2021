// // Connectivity with mongoose
const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/Stud_Emp_DB',{useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error(' Could not Connected to MongoDB...',err));



// Create Schemas
const studentSchema = new mongoose.Schema({
    ID: {type: Number, required: true},
    name:{type: String, required: true},
    address: {type: String, required: true},
    Fees: {
        Amount : Number,
        PaymentDate : Date,
        Status : Boolean
    },
    Result: {
        Hindi : Number,
        Eng : Number,
        Maths : Number,
        Total : Number,
        Grade : String
    }    
});


// Create Model
const Students = mongoose.model('Student',studentSchema);

// async function createStudent(){
//     const student1=new Students({
//         ID:1,
//         name: 'Reena',
//         address: 'Ahmedabad',
//         Fees: {Amount : 10000, PaymentDate : "12/12/2020", Status : true},
//         Result: {Hindi:80, Eng:110,Math:60,Total:210,Grade:"A"}
//     });
//     const student2=new Students({
//         ID:2,
//         name: 'Rita',
//         address: 'Surat',
//         Fees: {Amount : 12000, PaymentDate : "12/12/2020", Status : true},
//         Result: {Hindi:80,Eng:70,Math:60,Total:210,Grade:"A"}
//     });
//     const result1 = await student1.save();
//     const result2 = await student2.save();
//     console.log(result1);
//     console.log(result2);
// }

// createStudent();


module.exports = Students;




