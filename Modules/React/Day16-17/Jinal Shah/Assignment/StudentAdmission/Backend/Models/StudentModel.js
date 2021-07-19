const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/StudentAdmission', { useNewUrlParser: true, useUnifiedTopology: true })
   .then(() => console.log('Connected to MongoDB...'))
   .catch(err => console.error('Could not connect to MongoDB...', err));


const studentSchema = new mongoose.Schema({

   StudentFname: { type: String, required: true },
   StudentMname: { type: String, required: true },
   StudentLname: { type: String, required: true },
   StudentEmail: { type: String, required: true },
   Gender: { type: String, required: true },
   DateOfBirth: { type: Date, required: true },
   PlaceOfBirth: { type: String, required: true },
   Language: { type: String, required: true },
   Country: { type: String, required: true },
   State: { type: String, required: true },
   City: { type: String, required: true },
   Pincode: { type: Number, required: true },
   Enrollment: { type: Number, required: true },
   ClgName: { type: String, required: true },
   ClgAdd: { type: String, required: true },
   Logo: { type: String, required: true },
   Pic: { type: String, required: true },
   FatherFname: { type: String, required: true },
   FatherMname: { type: String, required: true },
   FatherLname: { type: String, required: true },
   FatherEmail: { type: String, required: true },
   FatherEQ: { type: String, required: true },
   FatherProfession: { type: String, required: true },
   FatherDesignation: { type: String, required: true },
   FatherPhone: { type: Number, required: true },
   MotherFname: { type: String, required: true },
   MotherMname: { type: String, required: true },
   MotherLname: { type: String, required: true },
   MotherEmail: { type: String, required: true },
   MotherEQ: { type: String, required: true },
   MotherProfession: { type: String, required: true },
   MotherDesignation: { type: String, required: true },
   MotherPhone: { type: Number, required: true },
   Relation: { type: String, required: true },
   RelationPhone: { type: Number, required: true },
   ReferenceDetails: { type: String, required: true },
   ReferenceThrough: { type: String, required: true },
   ReferenceAddress: { type: String, required: true },
   ReferencePhone: { type: Number, required: true }

})

const student = mongoose.model('Students', studentSchema)
module.exports = student


/*

https://www.geeksforgeeks.org/upload-and-retrieve-image-on-mongodb-using-mongoose/#:~:text=So%20for%20storing%20an%20image,in%20the%20form%20of%20arrays.

*/

/*  Postman data
{
   "StudentFname": "abc" ,
   "StudentMname": "abc",
   "StudentLname": "abc",
   "StudentEmail":"abc" ,
   "Gender":"abc" ,
   "DateOfBirth": "1999-02-02" ,
   "PlaceOfBirth":"abc" ,
   "Language": "abc",
   "Country":"abc" ,
   "State":"abc" ,
   "City":"abc" ,
   "Pincode": 234557 ,
   "Enrollment": 12235546,
   "ClgName":"abc" ,
   "ClgAdd":"abc",
   "FatherFname":"abc" ,
   "FatherMname": "abc",
   "FatherLname": "abc",
   "FatherEmail": "ab@gmail.com" ,
   "FatherEQ": "abc",
   "FatherProfession":"abc" ,
   "FatherDesignation":"abc" ,
   "FatherPhone": 1234567890 ,
   "MotherFname":"abc" ,
   "MotherMname":"abc" ,
   "MotherLname":"abc" ,
   "MotherEmail": "dw@gmail.com",
   "MotherEQ": "abc",
   "MotherProfession":"abc" ,
   "MotherDesignation":"abc" ,
   "MotherPhone": 1213435,
   "Relation": "abc",
   "RelationPhone": 425136467 ,
   "ReferenceDetails":"abc" ,
   "ReferenceThrough": "abc",
   "ReferenceAddress":"abc" ,
   "ReferencePhone": 135346657
}

   */