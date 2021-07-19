// // Connectivity with mongoose
const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/HospitalDB',{useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error(' Could not Connected to MongoDB...',err));

// Create Schemas

const patientSchema = new mongoose.Schema({
    pId:{
        type: Number,
        required: true
    },
    pName: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 25
    },
    Address: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 20
    },
    phoneNo: {
        type: Number,
        validate: {
            validator: function (n) {
                return /\d{10}/.test(n);
            },
            message: props => `${props.value} Your number must be 10 letters`
        },
        required: [true, 'Patient phone number required']
    },
    Doctor:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor"
    }],
    Medicine:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Medicine"
    }]
});

const Patient = mongoose.model('Patient', patientSchema);

module.exports=Patient

// async function createPatient() {
//     const p1= new Patient({
//         pId : 111,
//         pName : 'Vidhi Darji',
//         Address : 'Himmatnagar',
//         phoneNo : 76548976542,
//         Doctor : ['6081c14caa9fe204d0a3df38','6081c172fead2e3210d8e779'] ,
//         Medicine : ['60814ab3ed0ecd2ec05e808e']
//     });
//     const p2= new Patient({
//         pId : 112,
//         pName : 'Kavya Parmar',
//         Address : 'Mumbai',
//         phoneNo : 9287324679,
//         Doctor : ['6081c15f5dc38f29b0d6fbb0']        ,
//         Medicine : ['6081b4290f148d1c74faf0ba','6081b44e50a51c29c07680c5']
//     });
//     const p3= new Patient({
//         pId : 113,
//         pName : 'Rishabh Dubey',
//         Address : 'Surat',
//         phoneNo : 9873456728,
//         Doctor : ['6081c172fead2e3210d8e779','6081c15f5dc38f29b0d6fbb0'],       
//         Medicine : ['6081b44e50a51c29c07680c5','60814ab3ed0ecd2ec05e808e','6081b6cb05f94402dccda05d']
//     });
// try{
//     const result = await p3.save();
//     console.log(result);
// }
//  catch(ex){
//      for(field in ex.errors)
//         console.log(ex.errors[field].message);
//  }   
// }
// createPatient()




// createPatient(05, 'Jeeta', 'ABCDE', 09876543210, '608128d28d8c8d21b0601b27', '608129744a92871c040af9e8');

