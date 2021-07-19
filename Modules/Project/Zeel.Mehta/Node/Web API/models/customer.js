// // Connectivity with mongoose
const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/Zomato',{useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error(' Could not Connected to MongoDB...',err));
// Create Schemas

const customerSchema = new mongoose.Schema({
    Customer_ID:{
        type: Number,
        required: true
    },
    Customer_Name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 25
    },
    email : {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 30
    },
    password : {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 50
    },
    Customer_Address: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 30
    },
    Customer_No: {
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
const Customer = mongoose.model('Customer', customerSchema)

module.exports = Customer

// async function createCustomer() {
//     const c1= new Customer({
//         Customer_ID : 1,
//         Customer_Name : 'Bhavyaraj Singh',  
//         email : 'zkajska',
//         password : 'aksdks1234',      
        // Customer_Address : "Ahmedabad",
//         Customer_No : 9323536323        
//     });
//     const c2= new Customer({
//         Customer_ID : 2,
//         Customer_Name : 'Aangi Shah',        
//         Customer_Address : "Gandhinagar",
//         Customer_No : 8482898381        
//     });
//     const c3= new Customer({
//         Customer_ID : 3,
//         Customer_Name : 'Aalap Amin',        
//         Customer_Address : "Vadodara",
//         Customer_No : 7279787310        
//     });
//     try{
//         const result = await c1.save();
//         console.log(result);
//     }
//      catch(ex){
//          for(field in ex.errors)
//             console.log(ex.errors[field].message);
//      } 
// }
// createCustomer();