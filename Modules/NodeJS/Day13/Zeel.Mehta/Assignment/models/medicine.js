// // Connectivity with mongoose
const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/HospitalDB',{useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error(' Could not Connected to MongoDB...',err));


 
// Create Schemas

const medicineSchema =new mongoose.Schema({
    mId:{
        type: Number,
        required: true
    },
    mName: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 30
    },
    Routine: [{
        type: String,
        required: true,
        enum : ['morning', 'afternoon', 'night'],
    }]
});


const Medicine = mongoose.model('Medicine', medicineSchema)

module.exports = Medicine

// async function createMedicine() {
//     const m1= new Medicine({
//         mId : 101,
//         mName : 'Naproxen Sodium',
//         Routine : 'morning'
//     });
//     const m2= new Medicine({
//         mId : 102,
//         mName : 'Captopril',
//         Routine : ['morning','night']
//     });
//     const m3= new Medicine({
//         mId : 103,
//         mName : 'Zoloft ',
//         Routine : ['morning','afternoon','night']
//     });
//     const m4= new Medicine({
//         mId : 104,
//         mName : 'Erythromycin',
//         Routine : 'night'
//     });
//     const result = await m4.save();
//     console.log(result);
// }
// createMedicine()


