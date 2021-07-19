// // Connectivity with mongoose
const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/Zomato',{useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error(' Could not Connected to MongoDB...',err));

// Create Schemas

const orderSchema = new mongoose.Schema({
    Order_ID:{
        type: Number,
        required: true
    },
    Order_Price: {
        type: Number,
        required: true
    },
    Discount: Number,
    TotalPrice: {
        type: Number,
        required: true
    },
    Payment_Type: ['cod', 'online'],
    Customer:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Customer"
    }],
    Restaurant:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Restaurant"
    }],
    FoodItems:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Food"
    }]
});

const Order = mongoose.model('Order', orderSchema);

module.exports=Order

// async function createOrder() {

//     const o1= new Order({
//         Order_ID : 111,
//         Order_Price : 250 ,
//         TotalPrice : 250 ,
//         Payment_Type : ['cod'],
//         Customer : ['6087ab90f815992cecb94d01'],
//         Restaurant : ['6087acec10485d1f785150be'],
//         FoodItems : ['6087af67623020268cd01a1b']
//     });
    
// try{
//     const result = await o1.save();
//     console.log(result);
// }
//  catch(ex){
//      for(field in ex.errors)
//         console.log(ex.errors[field].message);
//  }   
// }
// createOrder()