import React, { useState } from 'react'
import Form from './Form';
import StudentService from '../services/StudentService'

const validEmailRegex = RegExp(
   /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
const validateForm = errors => {
   let valid = true;
   Object.values(errors).forEach(val => val.length > 0 && (valid = false));
   return valid;
};

function AddStudent(props) {

   const [students, setStudents] = useState({
      StudentFname: "",
      StudentMname: "",
      StudentLname: "",
      StudentEmail: "",
      Gender: "",
      DateOfBirth: "",
      PlaceOfBirth: "",
      Language: "",
      Country: "",
      State: "",
      City: "",
      Pincode: "",
      Enrollment: "",
      ClgName: "",
      ClgAdd: "",
      Logo: "",
      Pic: "",
      FatherFname: "",
      FatherMname: "",
      FatherLname: "",
      FatherEmail: "",
      FatherEQ: "",
      FatherProfession: "",
      FatherDesignation: "",
      FatherPhone: "",
      MotherFname: "",
      MotherMname: "",
      MotherLname: "",
      MotherEmail: "",
      MotherEQ: "",
      MotherProfession: "",
      MotherDesignation: "",
      MotherPhone: "",
      Relation: "",
      RelationPhone: "",
      ReferenceDetails: "",
      ReferenceThrough: "",
      ReferenceAddress: "",
      ReferencePhone: "",
      errors: {
         StudentFname: '',
         StudentEmail: '',
         Enrollment: '',
         FatherEmail: '',
         MotherEmail: '',
         FatherPhone: '',
         MotherPhone: '',
         RelationPhone: '',
         ReferencePhone: '',
         Pincode: '',
         DateOfBirth: ''
      }
   })

   const onLogoChange = (event) => {
      setStudents({
         ...students,
         [event.target.name]: URL.createObjectURL(event.target.files[0])
      })
   }

   const handleChange = (event) => {
      event.preventDefault();
      const { name, value } = event.target;
      let errors = students.errors;

      switch (name) {
         case 'StudentFname':
            if (value.match(/^[A-Za-z]{3,}$/)) {
               errors.StudentFname = "";
            }
            else {
               errors.StudentFname = "only character string allowed";
            }
         case 'StudentEmail':
            errors.StudentEmail =
               validEmailRegex.test(value)
                  ? ''
                  : 'Email is not valid!';
            break;
         case 'Enrollment':
            if (value.length < 12 || value.length > 12) {
               errors.Enrollment = 'Enrollment number should contain only 12 digit';
            }
            else {
               errors.Enrollment = '';
            }
            break;
         case 'FatherEmail':
            errors.FatherEmail =
               validEmailRegex.test(value)
                  ? ''
                  : 'Email is not valid!';
            break;
         case 'MotherEmail':
            errors.MotherEmail =
               validEmailRegex.test(value)
                  ? ''
                  : 'Email is not valid!';
            break;
         case 'FatherPhone':
            if (value.length < 10 || value.length > 10) {
               errors.FatherPhone = 'Phone number should contain only 10 digit';
            }
            else {
               errors.FatherPhone = '';
            }
            break;
         case 'MotherPhone':
            if (value.length < 10 || value.length > 10) {
               errors.MotherPhone = 'Phone number should contain only 10 digit';
            }
            else {
               errors.MotherPhone = '';
            }
            break;
         case 'RelationPhone':
            if (value.length < 10 || value.length > 10) {
               errors.RelationPhone = 'Phone number should contain only 10 digit';
            }
            else {
               errors.RelationPhone = '';
            }
            break;
         case 'ReferencePhone':
            if (value.length < 10 || value.length > 10) {
               errors.ReferencePhone = 'Phone number should contain only 10 digit';
            }
            else {
               errors.ReferencePhone = '';
            }
            break;
         case 'Pincode':
            if (value.length < 6 || value.length > 6) {
               errors.Pincode = 'Pin number should contain only 6 digit';
            }
            else {
               errors.Pincode = '';
            }
            break;
         case 'DateOfBirth':

            const dateString = value;
            const now = new Date();

            const yearNow = now.getFullYear();
            const monthNow = now.getMonth();
            const dateNow = now.getDate();

            const dob = new Date(dateString);

            const yearDob = dob.getFullYear();
            const monthDob = dob.getMonth();
            const dateDob = dob.getDate();

            let yearAge = yearNow - yearDob;
            console.log(yearAge)

            if (yearAge < 5 || yearAge > 20) {
               errors.DateOfBirth = 'You are not eligible';
            }
            else {
               errors.DateOfBirth = '';
            }

            break;
         default:
            break;
      }

      setStudents({
         ...students,
         [name]: value
      });
   }


   const handleSubmit = e => {
      console.log('handle submit')
      e.preventDefault();
      if (validateForm(students.errors)) {
         console.info('Valid Form')
         StudentService.createStudent(students).then(res => {
            props.history.push('/');
         })
      } else {
         console.error('Invalid Form')
      }
   }

   return (
      <div className="container">
         <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-5">
               <Form data={students} onLogoChange={onLogoChange}
                  handleSubmit={handleSubmit} handleChange={handleChange} />
            </div>
         </div>
      </div>
   );
}


export default AddStudent;
