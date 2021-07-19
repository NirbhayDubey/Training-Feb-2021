// Connectivity with mongoose
const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/Stud_Emp_DB',{useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error(' Could not Connected to MongoDB...',err));



// Create Schemas
const employeesSchema = new mongoose.Schema({
        ID: {
            type: String,
            required: true,
            maxlength: 25
        },
        AddressLine1: {
            type: String,
            required: true,
            minlength: 5,
            maxlength: 25
        },
        AddressLine2: {
            type: String,
            required: true,
            minlength: 5,
            maxlength: 25
        },
        AddressLine:  {
            type: String,
            required: true,
            minlength: 5,
            maxlength: 25
        },
        assignments : Array
    });
    
    
    // Create Model
    const Employees = mongoose.model('Employees',employeesSchema);
    
    // async function createEmployees(){
    //     const employee1=new Employees({
    //         ID:"1",
    //         AddressLine1:"Divyajivan_Heights",
    //         AddressLine2:"Kudasan",
    //         AddressLine3: "Gandhinagar",
    //         assignments :[ {ID : '1',ActionCode : 'emp1code1' },{ID : '2',ActionCode : 'emp1code2' },
    //     {ID : '3',ActionCode : 'emp1code3' }]
            
    //     });
    //     const employee2=new Employees({
    //         ID:"2",
    //         AddressLine1:"Susmita_Flates",
    //         AddressLine2:"Vasna",
    //         AddressLine3: "Ahmedabad",
    //         assignments :[ {ID : '1',ActionCode : 'emp2code1' },{ID : '2',ActionCode : 'emp2code2' },
    //     {ID : '3',ActionCode : 'emp2code3' }]
            
    //     });
    //     const r1 = await employee1.save();
    //     const r2 = await employee2.save();
    //     console.log(r1);
    //     console.log(r2);
    // }
    
    // createEmployees();
    
    
    module.exports = Employees;
    
    
    
    
    