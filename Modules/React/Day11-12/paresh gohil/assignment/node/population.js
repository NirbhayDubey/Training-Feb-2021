const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/student' , {useNewUrlParser : true ,  useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

  const studentSchema = new mongoose.Schema({
    id : Number,
    images : String,
    firstName : String,
    middleName : String,
    lastName : String,
    DOB : String,
    PlaceofBirth : String,
    age : Number,
    first_language : String,
    city : String,
    State : String,
    country : String,
    pin: Number,
    F_FirstName : String,
    F_LastName : String,
    F_MiddleName : String,
    F_Email : String,
    F_Education_Qualification : String,
    F_Profession : String,
    F_Designation : String,
    F_Phone : Number,
    M_FirstName : String,
    M_LastName : String,
    M_MiddleName : String,
    M_Email : String,
    M_Education_Qualification : String,
    M_Profession : String,
    M_Designation : String,
    M_Phone : Number,
    Emergency_Contact : Number,
    R_Name : String,
    R_Relation : String,
    R_Number : Number,
    R_Address : String,  
    collegeName : String,
    logoimage : String
  });

  const Student = mongoose.model('Student', studentSchema);
  
async function createAuthor() { 
  const author = new Student({
    id : 2,
    images : "blob:http://localhost:3000/3ab4c2bf-9571-43a0-80ec-23d2e0cb1b50",
    firstName : "Mitesh",
    middleName : "Kumar",
    lastName : "Gohil",
    DOB : "22/12/1998",
    PlaceofBirth : "Mumbai",
    age : 20,
    first_language : "Gujarati",
    city : "Mumbai",
    State : "Maharashtra",
    country : "India",
    pin: 909090,
    F_FirstName : "JDK",
    F_LastName : "KFLF",
    F_MiddleName : "OFL",
    F_Email : "hjf@gmail.com",
    F_Education_Qualification : "B.E",
    F_Profession : "Worker",
    F_Designation : "XYZ",
    F_Phone : 1234567890,
    M_FirstName : "IEO",
    M_LastName : "JKD",
    M_MiddleName : "POU",
    M_Email : "Lp@gmail.com",
    M_Education_Qualification : "No",
    M_Profession : "HouseWife",
    M_Designation : "JFK",
    M_Phone : 2134456789,
    Emergency_Contact : 7123456892,
    R_Name : "IOD",
    R_Relation : "TYTU",
    R_Number : 9111232345,
    R_Address : "Ahmedabad",  
    collegeName : "L.J",
    logoimage : "blob:http://localhost:3000/8e7f2c31-0ffb-4769-b8b6-81c50d606efe"
  });

  const result = await author.save();
  console.log(result);
}


createAuthor();

