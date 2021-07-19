// // Connectivity with mongoose
const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/Zomato',{useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error(' Could not Connected to MongoDB...',err));
// Create Schemas

const foodSchema = new mongoose.Schema({
    Food_ID:{
        type: String,
        required: true
    },
    Food_Name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 25
    },
    Food_Price: {
        type: Number,
        required: true,
        
    },
    Food_Type: ['veg', 'nonveg'] ,
    
    Food_Details : {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 30
    },
    Restaurant:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Restaurant"
    }]      
});
const Food = mongoose.model('Food', foodSchema)

module.exports = Food

// async function createFood() {
//     const r1= new Food({
//                 Food_ID : 'F101',
//                 Food_Name : 'Pau-Bhaji',
//                 Food_Price : 90,
//                 Food_Type : ['veg'],
//                 Food_Details : '2 Pau with Bhaji',
//                 Restaurant : ['6087acec10485d1f785150be']
//             });
//     const r2= new Food({
//                 Food_ID : 'F102',
//                 Food_Name : 'Paneer Pizza',
//                 Food_Price : 200,
//                 Food_Type : ['veg'],
//                 Food_Details : 'Pizza',
//                 Restaurant : ['6087acec10485d1f785150be']
//             });
//     const r3= new Food({
//                 Food_ID : 'F103',
//                 Food_Name : 'Grill Sandwitch',
//                 Food_Price : 100,
//                 Food_Type : ['veg'],
//                 Food_Details : 'Sandwitch',
//                 Restaurant : ['6087acec10485d1f785150be']
//             });
//     const r4= new Food({
//                 Food_ID : 'F104',
//                 Food_Name : 'Chocolate',
//                 Food_Price : 100,
//                 Food_Type : ['veg'],
//                 Food_Details : 'Family Pack',
//                 Restaurant : ['6087acec10485d1f785150be']           
//             });
//     const r5= new Food({
       
//                 Food_ID : 'F105',
//                 Food_Name : 'Garlic Bread',
//                 Food_Price : 100,
//                 Food_Type : ['veg'],
//                 Food_Details : '2 Garlic Bread',
//                 Restaurant : ['6087ad063bdcb007e83bd76e'] 
//             });
//     const r6= new Food({
            
//                 Food_ID : 'F106',
//                 Food_Name : 'Burger',
//                 Food_Price : 70,
//                 Food_Type : ['veg'],
//                 Food_Details : 'Regular Burger',
//                 Restaurant : ['6087ad063bdcb007e83bd76e'] 
//             });
//     const r7= new Food({
//                 Food_ID : 'F107',
//                 Food_Name : 'Burger',
//                 Food_Price : 150,
//                 Food_Type : ['nonveg'],
//                 Food_Details : 'Nonveg Burger',
//                 Restaurant : ['6087ad063bdcb007e83bd76e'] 
//             });
//     const r8= new Food({
//                 Food_ID : 'F108',
//                 Food_Name : 'French Fries',
//                 Food_Price : 100,
//                 Food_Type : ['veg'],
//                 Food_Details : 'Small',
//                 Restaurant : ['6087ad063bdcb007e83bd76e'] 
                
//     });
//     try{
//         const result = await r8.save();
//         console.log(result);
//     }
//      catch(ex){
//          for(field in ex.errors)
//             console.log(ex.errors[field].message);
//      } 
// }
// createFood();