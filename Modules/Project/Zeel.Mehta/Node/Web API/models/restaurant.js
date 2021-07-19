// // Connectivity with mongoose
const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/Zomato',{useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error(' Could not Connected to MongoDB...',err));
// Create Schemas

const restaurantSchema = new mongoose.Schema({
    Restaurant_ID:{
        type: String,
        required: true
    },
    Restaurant_Name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 25
    },
    Restaurant_Address: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 30
    },
    Restaurant_Rating: {
        type: Number,
        required: true
    }
    
});
const Restaurant = mongoose.model('Restaurant', restaurantSchema)

module.exports = Restaurant

// async function createRestaurant() {
//     const r1= new Restaurant({
//         Restaurant_ID : 'R101',
//         Restaurant_Name : 'Amul Cafe',        
//         Restaurant_Address : "Ahmedabad",
//         Restaurant_Rating : 9323536323
              
//     });
//     const r2= new Restaurant({
//         Restaurant_ID : 'R102',
//         Restaurant_Name : 'Burger King',        
//         Restaurant_Address : "Gandhinagar",
//         Restaurant_Rating : 4343436323
         
//     });
//     const r3= new Restaurant({
//         Restaurant_ID : 'R103',
//         Restaurant_Name : 'Dominoz',        
//         Restaurant_Address : "Gandhinagar",
//         Restaurant_Rating : 7777736323
         
//     });
//     try{
//         const result = await r3.save();
//         console.log(result);
//     }
//      catch(ex){
//          for(field in ex.errors)
//             console.log(ex.errors[field].message);
//      } 
// }
// createRestaurant();