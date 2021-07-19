import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Form from './UpdateForm';
import StudentService from '../services/StudentService'

const validEmailRegex = RegExp(
   /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
const validateForm = errors => {
   let valid = true;
   Object.values(errors).forEach(val => val.length > 0 && (valid = false));
   return valid;
};

class AddStudent extends Component {

   constructor(props) {
      super(props);
      this.state = {
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
         Enrollment: this.props.match.params.id,
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
      }
   };

   componentDidMount() {

      StudentService.getStudentById(this.state.Enrollment).then((res) => {
         let stud = res.data;
         this.setState({
            StudentFname: stud[0].StudentFname,
            StudentLname: stud[0].StudentLname,
            StudentMname: stud[0].StudentMname,
            StudentEmail: stud[0].StudentEmail,
            Gender: stud[0].Gender,
            DateOfBirth: stud[0].DateOfBirth,
            PlaceOfBirth: stud[0].PlaceOfBirth,
            Language: stud[0].Language,
            Country: stud[0].Country,
            State: stud[0].State,
            City: stud[0].City,
            Pincode: stud[0].Pincode,
            Enrollment: stud[0].Enrollment,
            ClgName: stud[0].ClgName,
            ClgAdd: stud[0].ClgAdd,
            Logo: stud[0].Logo,
            Pic: stud[0].Pic,
            FatherFname: stud[0].FatherFname,
            FatherMname: stud[0].FatherMname,
            FatherLname: stud[0].FatherLname,
            FatherEmail: stud[0].FatherEmail,
            FatherEQ: stud[0].FatherEQ,
            FatherProfession: stud[0].FatherProfession,
            FatherDesignation: stud[0].FatherDesignation,
            FatherPhone: stud[0].FatherPhone,
            MotherFname: stud[0].MotherFname,
            MotherMname: stud[0].MotherMname,
            MotherLname: stud[0].MotherLname,
            MotherEmail: stud[0].MotherEmail,
            MotherEQ: stud[0].MotherEQ,
            MotherProfession: stud[0].MotherProfession,
            MotherDesignation: stud[0].MotherDesignation,
            MotherPhone: stud[0].MotherPhone,
            Relation: stud[0].Relation,
            RelationPhone: stud[0].RelationPhone,
            ReferenceDetails: stud[0].ReferenceDetails,
            ReferenceThrough: stud[0].ReferenceThrough,
            ReferenceAddress: stud[0].ReferenceAddress,
            ReferencePhone: stud[0].ReferencePhone,
         });
      });

   }

   onLogoChange = (event) => {
      this.setState({
         [event.target.name]: URL.createObjectURL(event.target.files[0])
      }, console.log(this.state.Logo))
   }

   onPicChange = (event) => {
      this.setState({
         [event.target.name]: URL.createObjectURL(event.target.files[0])
      }, console.log(this.state.Pic))
   }

   handleChange = (event) => {
      event.preventDefault();
      const { name, value } = event.target;
      let errors = this.state.errors;

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

      this.setState({ errors, [name]: value });
   }


   handleSubmit = e => {
      console.log('handle submit')
      e.preventDefault();
      if (validateForm(this.state.errors)) {
         console.info('Valid Form')

         const data = {
            StudentFname: this.state.StudentFname,
            StudentMname: this.state.StudentMname,
            StudentLname: this.state.StudentLname,
            StudentEmail: this.state.StudentEmail,
            Gender: this.state.Gender,
            DateOfBirth: this.state.DateOfBirth,
            PlaceOfBirth: this.state.PlaceOfBirth,
            Language: this.state.Language,
            Country: this.state.Country,
            State: this.state.State,
            City: this.state.City,
            Pincode: this.state.Pincode,
            Enrollment: this.state.Enrollment,
            ClgName: this.state.ClgName,
            ClgAdd: this.state.ClgAdd,
            Logo: this.state.Logo,
            Pic: this.state.Pic,
            FatherFname: this.state.FatherFname,
            FatherMname: this.state.FatherMname,
            FatherLname: this.state.FatherLname,
            FatherEmail: this.state.FatherEmail,
            FatherEQ: this.state.FatherEQ,
            FatherProfession: this.state.FatherProfession,
            FatherDesignation: this.state.FatherDesignation,
            FatherPhone: this.state.FatherPhone,
            MotherFname: this.state.MotherFname,
            MotherMname: this.state.MotherMname,
            MotherLname: this.state.MotherLname,
            MotherEmail: this.state.MotherEmail,
            MotherEQ: this.state.MotherEQ,
            MotherProfession: this.state.MotherProfession,
            MotherDesignation: this.state.MotherDesignation,
            MotherPhone: this.state.MotherPhone,
            Relation: this.state.Relation,
            RelationPhone: this.state.RelationPhone,
            ReferenceDetails: this.state.ReferenceDetails,
            ReferenceThrough: this.state.ReferenceThrough,
            ReferenceAddress: this.state.ReferenceAddress,
            ReferencePhone: this.state.ReferencePhone
         }
         console.log(data)
         /* StudentService.createStudent(data).then(res => {
            this.props.history.push('/');
         }) */
         StudentService.updateStudent(this.state, this.state.Enrollment).then(res => {
            this.props.history.push('/');
         })
      } else {
         console.error('Invalid Form')
      }
   }


   render() {
      return (
         <div className="container">
            <div className="row">
               <div className="col-10 mx-auto col-md-8 mt-5">
                  <Form data={this.state} onLogoChange={this.onLogoChange} errors={this.state.errors}
                     onPicChange={this.onPicChange} handleSubmit={this.handleSubmit}
                     handleChange={this.handleChange} editData={this.state.editData} />
               </div>
            </div>
         </div>
      );
   }
}

export default AddStudent;
