import React, { Component } from "react";
import "./App.css";
import { v4 as uuid } from "uuid";
import StudentInput from "./components/StudentInput";
import StudentList from "./components/StudentList";

import csc from "country-state-city";
import validator from "validator";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countries: csc.getAllCountries(),
      states: [],
      cities: [],
      countryCode: "",
      students: [],
      id: uuid(),
      firstName: "",
      middleName: "",
      lastName: "",
      dob: "",
      birthPlace: "",
      lang: "",
      city: "",
      state: "",
      country: "",
      pin: "",
      img: "",
      collegeName: "",
      collegeLogo: "",
      editItem: false,
      referenceDetail: "",
      referenceThrough: "",
      addr: "",
      phone: "",
      msg: [],
      mFirstName: "",
      mMiddleName: "",
      mLastName: "",
      mEmail: "",
      mQualification: "",
      mProfession: "",
      mDesignation: "",
      mPhone: "",
      fFirstName: "",
      fMiddleName: "",
      fLastName: "",
      fEmail: "",
      fQualification: "",
      fProfession: "",
      fDesignation: "",
      fPhone: "",
    };
  }

  handleAge(val) {
    var today = new Date();
    var birthDate = new Date(val);
    var age_now = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age_now--;
    }
    console.log(age_now);
    if (age_now < 5 || age_now > 20) {
      console.log("invalid");
      this.setState({
        msg: [
          ...new Set([
            ...this.state.msg,
            { name: "dob", value: "age should be between 5 to 20" },
          ]),
        ],
      });
    } else {
      this.setState({
        msg: this.state.msg.filter((m) => m.name !== "dob"),
      });
    }
  }

  handleChange = (e) => {
    const nam = e.target.name;
    const val = e.target.value;

    if (nam.search(/name/gi) !== -1) {
      if (!validator.isAlpha(val)) {
        this.setState({
          msg: [
            ...new Set([
              ...this.state.msg,
              { name: nam, value: "this field shoud only contain alphabets" },
            ]),
          ],
        });
      } else {
        this.setState({
          msg: this.state.msg.filter((m) => m.name !== nam),
        });
      }
    } else if (nam.search(/email/gi) !== -1) {
      if (!validator.isEmail(val)) {
        this.setState({
          msg: [
            ...new Set([
              ...this.state.msg,
              { name: nam, value: "enter valid email" },
            ]),
          ],
        });
      } else {
        this.setState({
          msg: this.state.msg.filter((m) => m.name !== nam),
        });
      }
    } else if (nam.search(/phone/gi) !== -1) {
      if (val.length !== 10) {
        this.setState({
          msg: [
            ...new Set([
              ...this.state.msg,
              { name: nam, value: "enter 10 digit number" },
            ]),
          ],
        });
      } else {
        this.setState({
          msg: this.state.msg.filter((m) => m.name !== nam),
        });
      }
    } else if (nam === "dob") {
      this.handleAge(val);
    } else if (nam === "pin") {
      if (val.length !== 6) {
        console.log("invalid");
        this.setState({
          msg: [
            ...new Set([
              ...this.state.msg,
              { name: "pin", value: "enter 6 digiy pin" },
            ]),
          ],
        });
      } else {
        this.setState({
          msg: this.state.msg.filter((m) => m.name !== "pin"),
        });
      }
    } else if (nam === "country") {
      this.setState({
        states: csc.getStatesOfCountry(val),
        countryCode: val,
      });
    } else if (nam === "state") {
      this.setState({
        cities: csc.getCitiesOfState(this.state.countryCode, val),
      });
    }
    this.setState({
      [nam]: val,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let myImg = this.state.img.split("\\");
    myImg = `img/${myImg[myImg.length - 1]}`;
    let myLogo = this.state.collegeLogo.split("\\");
    myLogo = `img/${myLogo[myLogo.length - 1]}`;
    const newStudent = {
      id: this.state.id,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      img: myImg,
      collegeName: this.state.collegeName,
      collegeLogo: myLogo,
      middleName: this.state.middleName,
      dob: this.state.dob,
      birthPlace: this.state.birthPlace,
      lang: this.state.lang,
      city: this.state.city,
      state: this.state.state,
      country: this.state.country,
      pin: this.state.pin,
      referenceDetail: this.state.referenceDetail,
      referenceThrough: this.state.referenceThrough,
      addr: this.state.addr,
      phone: this.state.phone,
      mFirstName: this.state.mFirstName,
      mMiddleName: this.state.mMiddleName,
      mLastName: this.state.mLastName,
      mEmail: this.state.mEmail,
      mQualification: this.state.mQualification,
      mProfession: this.state.mProfession,
      mDesignation: this.state.mDesignation,
      mPhone: this.state.mPhone,
      fFirstName: this.state.fFirstName,
      fMiddleName: this.state.fMiddleName,
      fLastName: this.state.fLastName,
      fEmail: this.state.fEmail,
      fQualification: this.state.fQualification,
      fProfession: this.state.fProfession,
      fDesignation: this.state.fDesignation,
      fPhone: this.state.fPhone,
    };
    const updatedStudents = [...this.state.students, newStudent];
    this.setState({
      students: updatedStudents,
      id: uuid(),
      firstName: "",
      lastName: "",
      img: "",
      collegeName: "",
      collegeLogo: "",
      editItem: false,
    });
  };

  handleDelete = (id) => {
    const filteredStudents = this.state.students.filter(
      (student) => student.id !== id
    );
    this.setState({
      students: filteredStudents,
    });
  };

  handleEdit = (id) => {
    console.log("called", id);
    const filteredStudents = this.state.students.filter(
      (student) => student.id !== id
    );
    console.log(filteredStudents);
    const selectedStudent = this.state.students.find(
      (student) => student.id === id
    );
    console.log(selectedStudent);
    this.setState({
      students: filteredStudents,
      firstName: selectedStudent.firstName,
      lastName: selectedStudent.lastName,
      collegeName: selectedStudent.collegeName,
      id: id,
      editItem: true,
    });
    console.log(this.state);
    document.getElementById("inp").focus();
  };

  clearList = () => {
    this.setState({
      students: [],
    });
  };

  render() {
    return (
      <div className="container">
        <StudentInput
          info={this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          editItem={this.state.editItem}
        />
        <StudentList
          students={this.state.students}
          handleDelete={this.handleDelete}
          clearList={this.clearList}
          handleEdit={this.handleEdit}
        />
      </div>
    );
  }
}
