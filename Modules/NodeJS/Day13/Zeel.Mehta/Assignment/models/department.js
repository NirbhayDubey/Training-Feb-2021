// // Connectivity with mongoose
const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/HospitalDB',{useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error(' Could not Connected to MongoDB...',err));



// Create Schemas

const departmentSchema = new mongoose.Schema({
    deptId:{
        type: Number,
        required: true
    },
    deptName: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 15
    },
    Doctor: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor"
    }],
    Patient: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Patient"
    }]
});
const Department = mongoose.model('Department', departmentSchema)

module.exports = Department

// async function createDepartment() {
//     const d1= new Department({
//         deptId : 101,
//         deptName : 'Dentist',
//         Doctor : ['6081c14caa9fe204d0a3df38'],
//         Patient : ['60877f2465003b1e1c592225']
//     });
//     const d2= new Department({
//         deptId : 102,
//         deptName : 'Cardiology',
//         Doctor : ['6081c15f5dc38f29b0d6fbb0'],
//         Patient : ['60877f37d2552118ace349cd','60877f4a3719811e64838f4a']
//     });
//     const d3= new Department({
//         deptId : 103,
//         deptName : 'Psychology',
//         Doctor : ['6081c172fead2e3210d8e779','60877cab654ff206186dbb70'],
//         Patient : ['60877f4a3719811e64838f4a','60877f2465003b1e1c592225']
//     });
    
//         const result = await d3.save();
//         console.log(result);
     
// }
// createDepartment();

