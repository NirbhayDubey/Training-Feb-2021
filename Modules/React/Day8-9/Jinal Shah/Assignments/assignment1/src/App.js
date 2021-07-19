// https://codingshiksha.com/react/react-js-age-calculator-from-date-of-birth-in-browser-using-typescript-full-project-for-beginners/

import React, { Component } from 'react'
import { v4 as uuid } from 'uuid'
import "bootstrap/dist/css/bootstrap.min.css";
import FormInput from './components/FormInput'
import StudentList from './components/StudentList'

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
const validateForm = errors => {
  let valid = true;
  Object.values(errors).forEach(val => val.length > 0 && (valid = false));
  return valid;
};


class App extends Component {


  constructor(props) {
    super(props);
    this.state = {
      students: [],
      id: uuid(),
      editData: false,
      fname: "", mname: "", lname: "", email: "", dob: '', place: '', lan: '', pin: '',
      city: '', country: '', state: '',
      erno: "", clgName: "", clgAdd: "", logo: "", pic: "",
      f1: '', f2: '', f3: '', f4: '', f5: '', f6: '', f7: '', f8: '',
      m1: '', m2: '', m3: '', m4: '', m5: '', m6: '', m7: '', m8: '',
      rel: '', relNo: '', gender: '',
      ref1: '', ref2: '', ref3: '', ref4: '',
      errors: {
        fname: '',
        mname: '',
        lname: '',
        email: '',
        erno: '',
        f4: '',
        f8: '',
        m4: '',
        m8: '',
        relNo: '',
        ref4: '',
        pin: '',
        dob: ''
      }
    };
  }

  calculateAge = (e) => {
    const dateString = e.target.value;
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
      this.state.errors.dob = 'You are not eligible';
    }
    else {
      this.state.errors.dob = '';
    }

    let monthAge;
    if (monthNow >= monthDob) {
      monthAge = monthNow - monthDob;
    } else {
      yearAge--;
      monthAge = 12 + monthNow - monthDob;
    }

    let dateAge;
    if (dateNow >= dateDob) {
      dateAge = dateNow - dateDob;
    } else {
      monthAge--;
      dateAge = 31 + dateNow - dateDob;

      if (monthAge < 0) {
        monthAge = 11;
        yearAge--;
      }
    }

    const age = {
      years: yearAge,
      months: monthAge,
      days: dateAge
    };
    console.log(age)

  };

  onLogoChange = (event) => {
    this.setState({
      [event.target.name]: URL.createObjectURL(event.target.files[0])
    }, console.log(this.state.logo))
  }

  onPicChange = (event) => {
    this.setState({
      [event.target.name]: URL.createObjectURL(event.target.files[0])
    }, console.log(this.state.pic))
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case 'fname':
        errors.fname =
          value.length < 3
            ? 'First Name must be at least 3 characters long!'
            : '';
        break;
      case 'mname':
        errors.mname =
          value.length < 3
            ? 'Middle Name must be at least 3 characters long!'
            : '';
        break;
      case 'lname':
        errors.lname =
          value.length < 3
            ? 'Last Name must be at least 3 characters long!'
            : '';
        break;
      case 'email':
        errors.email =
          validEmailRegex.test(value)
            ? ''
            : 'Email is not valid!';
        break;
      case 'erno':
        if (value.length < 12 || value.length > 12) {
          errors.erno = 'Enrollment number should contain only 12 digit';
        }
        else {
          errors.erno = '';
        }
        break;
      case 'f4':
        errors.f4 =
          validEmailRegex.test(value)
            ? ''
            : 'Email is not valid!';
        break;
      case 'm4':
        errors.m4 =
          validEmailRegex.test(value)
            ? ''
            : 'Email is not valid!';
        break;
      case 'f8':
        if (value.length < 10 || value.length > 10) {
          errors.f8 = 'Phone number should contain only 10 digit';
        }
        else {
          errors.f8 = '';
        }
        break;
      case 'm8':
        if (value.length < 10 || value.length > 10) {
          errors.m8 = 'Phone number should contain only 10 digit';
        }
        else {
          errors.m8 = '';
        }
        break;
      case 'relNo':
        if (value.length < 10 || value.length > 10) {
          errors.relNo = 'Phone number should contain only 10 digit';
        }
        else {
          errors.relNo = '';
        }
        break;
      case 'ref4':
        if (value.length < 10 || value.length > 10) {
          errors.ref4 = 'Phone number should contain only 10 digit';
        }
        else {
          errors.ref4 = '';
        }
        break;
      case 'pin':
        if (value.length < 6 || value.length > 6) {
          errors.pin = 'Pin number should contain only 6 digit';
        }
        else {
          errors.pin = '';
        }
        break;
      case 'dob':

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
          errors.dob = 'You are not eligible';
        }
        else {
          errors.dob = '';
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
    } else {
      console.error('Invalid Form')
    }

    const newData = {
      id: this.state.id,
      fname: this.state.fname,
      mname: this.state.mname,
      lname: this.state.lname,
      email: this.state.email,
      dob: this.state.dob,
      place: this.state.place,
      lan: this.state.lan,
      pin: this.state.pin,
      city: this.state.city,
      country: this.state.country,
      state: this.state.state,
      gender: this.state.gender,
      erno: this.state.erno,
      clgName: this.state.clgName,
      clgAdd: this.state.clgAdd,
      logo: this.state.logo,
      pic: this.state.pic,
      f1: this.state.f1, f2: this.state.f2, f3: this.state.f3, f4: this.state.f4, f5: this.state.f5,
      f6: this.state.f6, f7: this.state.f7, f8: this.state.f8,
      m1: this.state.m1, m2: this.state.m2, m3: this.state.m3, m4: this.state.m4, m5: this.state.m5,
      m6: this.state.m6, m7: this.state.m7, m8: this.state.m8,
      rel: this.state.rel, relNo: this.state.relNo,
      ref1: this.state.ref1, ref2: this.state.ref2, ref3: this.state.ref3, ref4: this.state.ref4

    }

    const updatedData = [...this.state.students, newData]

    this.setState(
      {
        students: updatedData,
        id: uuid(),
        editData: false,
        fname: "", mname: "", lname: "", email: "", dob: '', place: '', lan: '', pin: '',
        city: '', country: '', state: '', gender: '',
        erno: "", clgName: "", clgAdd: "", logo: "", pic: "",
        f1: '', f2: '', f3: '', f4: '', f5: '', f6: '', f7: '', f8: '',
        m1: '', m2: '', m3: '', m4: '', m5: '', m6: '', m7: '', m8: '',
        rel: '', relNo: '',
        ref1: '', ref2: '', ref3: '', ref4: ''
      }
    )

  }

  clearList = () => {
    console.log('clear list')
    this.setState({
      students: []
    });
  }

  handleDelete = id => {
    console.log(`handle edit ${id}`)
    const filteredItems = this.state.students.filter(item => item.id !== id);
    this.setState({
      students: filteredItems
    })
  }

  handleEdit = id => {
    console.log(`edit edit ${id}`)
    const filteredItems = this.state.students.filter(item => item.id !== id);
    const selectedItem = this.state.students.find(item => item.id === id);
    this.setState({
      students: filteredItems,
      id: id,
      editData: true,
      fname: selectedItem.fname,
      mname: selectedItem.mname,
      lname: selectedItem.lname,
      email: selectedItem.email,
      dob: selectedItem.dob,
      place: selectedItem.place,
      lan: selectedItem.lan,
      pin: selectedItem.pin,
      erno: selectedItem.erno,
      clgName: selectedItem.clgName,
      clgAdd: selectedItem.clgAdd,
      logo: selectedItem.logo,
      pic: selectedItem.pic,
      gender: selectedItem.gender,
      f1: selectedItem.f1, f2: selectedItem.f2, f3: selectedItem.f3, f4: selectedItem.f4, f5: selectedItem.f5, f6: selectedItem.f6, f7: selectedItem.f7, f8: selectedItem.f8,
      m1: selectedItem.m1, m2: selectedItem.m2, m3: selectedItem.m3, m4: selectedItem.m4, m5: selectedItem.m5, m6: selectedItem.m6, m7: selectedItem.m7, m8: selectedItem.m8,
      rel: selectedItem.rel, relNo: selectedItem.relNo,
      ref1: selectedItem.ref1, ref2: selectedItem.ref2, ref3: selectedItem.ref3, ref4: selectedItem.ref4
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <FormInput fname={this.state.fname} lname={this.state.lname} mname={this.state.mname}
              email={this.state.email} dob={this.state.dob} place={this.state.place} lan={this.state.lan} pin={this.state.pin} erno={this.state.erno} clgName={this.state.clgName} clgAdd={this.state.clgAdd} logo={this.state.logo} pic={this.state.pic} gender={this.state.gender}
              errors={this.state.errors} f1={this.state.f1} f2={this.state.f2} f3={this.state.f3} f4={this.state.f4} f5={this.state.f5} f6={this.state.f6} f7={this.state.f7} f8={this.state.f8} m1={this.state.m1} m2={this.state.m2} m3={this.state.m3} m4={this.state.m4} m5={this.state.m5} m6={this.state.m6} m7={this.state.m7} m8={this.state.m8} rel={this.state.rel} relNo={this.state.relNo} ref1={this.state.ref1} ref2={this.state.ref2} ref3={this.state.ref3} ref4={this.state.ref4} onLogoChange={this.onLogoChange} onPicChange={this.onPicChange}
              handleSubmit={this.handleSubmit} handleChange={this.handleChange} editData={this.state.editData} calculateAge={this.calculateAge} />

            <StudentList items={this.state.students} clearList={this.clearList}
              handleDelete={this.handleDelete} handleEdit={this.handleEdit} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
