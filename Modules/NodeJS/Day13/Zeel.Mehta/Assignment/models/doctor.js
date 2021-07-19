// // Connectivity with mongoose
const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/HospitalDB',{useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error(' Could not Connected to MongoDB...',err));



// Create Schemas

const doctorSchema = new mongoose.Schema({
    dId:{
        type: Number,
        required: true
    },
    dName: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 15
    },
    Qualification: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 30
    },
    Address: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 30
    },
    phoneNo: {
        type: Number,
        validate: {
            validator: function (n) {
                return /\d{10}$/g.test(n);
            },
            message: props => `${props.value} Your number must be 10 letters`
        },
        required: [true, 'Doctor phone number required']
    },
    
});
const Doctor = mongoose.model('Doctor', doctorSchema)

module.exports = Doctor

// async function createDoctor() {
//     const d1= new Doctor({
//         dId : 91,
//         dName : 'Bhavyaraj Singh',
        
//         Qualification : "Bachelor of Dental Surgery",
//         Address : "Ahmedabad",
//         phoneNo : 09323536323
        
//     });
//     const d2= new Doctor({
//             dId : 02,
//             dName : 'Aangi Shah',
            
//             Qualification : "Doctor of Medicine",
//             Address : "Gandhinagar",
//             phoneNo : 8482898381
            
//         });
//     const d3= new Doctor({
//             dId : 03,
//             dName : 'Aalap Amin',
            
//             Qualification : "Master of Physiotherapy",
//             Address : "Vadodara",
//             phoneNo : 7279787310
            
//         });
//         const d4= new Doctor({
//                 dId : 04,
//                 dName : 'Ria Mehta',
                
//                 Qualification : "Master of Physiotherapy",
//                 Address : "Himmatnagar",
//                 phoneNo : 1111787310
                
//             });
//     try{
//         const result = await d4.save();
//         console.log(result);
//     }
//      catch(ex){
//          for(field in ex.errors)
//             console.log(ex.errors[field].message);
//      } 
// }
// createDoctor();

