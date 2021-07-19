import React, { Component } from "react";
import "./App.css";
import Form from "./Components/Form";
import StudentList from "./Components/StudentList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      handleChange: "",
      handleSubmit: "",
      firstName: "",
      middleName: "",
      lastName: "",
      DOB: "",
      birthPlace: "",
      firstLanguage: "",
      city: "",
      State: "",
      pinCode: "",
      fatherName: "",
      fatherMiddleName: "",
      fatherLastName: "",
      fatherEmail: "",
      fatherQulification: "",
      fatherProfession: "",
      fatherDesignation: "",
      fatherPhoneNo: "",
      motherName: "",
      motherMiddleName: "",
      motherLastName: "",
      motherEmail: "",
      motherQulification: "",
      motherProfession: "",
      motherDesignation: "",
      motherPhoneNo: "",
      EmergencyContact: "",
      relation: "",
      referenceName: "",
      gender:"",
      students: [],
      showStudents: false,
      showForm: true,
      file:""
    };
    
    // this.handleChange = this.handleChange.bind(this);
    // this.handleShow = this.handleShow.bind(this);
    
  }

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      [name]: value,

    });
    console.log(value);
  };


  handleShow = (x) => {
    if (x === "students") {
      this.setState({ showStudents: true, showForm: false });
    } else if (x === "form") {
      this.setState({ showStudents: false, showForm: true });
    }
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const student = {
      id: this.state.students.length + 1,
      firstName: this.state.firstName,
      middleName: this.state.middleName,
      lastName: this.state.lastName,
      DOB: this.state.DOB,
      city: this.state.city,    
      pinCode: this.state.pinCode,
      gender:this.state.gender,
      file:this.state.file
      
    };
    console.log(student)
    const updatedStudents = [...this.state.students, student];
    this.setState(() => {
      return {
        students: updatedStudents,
        firstName: "",
        middleName: "",
        lastName:"",
        city: "",
        pinCode:"",
        gender:"",
        file:""
      };
    });
    this.handleShow("students");
  };
  render() {
    return (
      <section className="container">
        <article>
        {this.state.showForm && (
          <Form
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            handleShow={this.state.handleShow}
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            city={this.state.city}
          />
        )}
        </article>
        <article>
        {this.state.showStudents && (
          <StudentList
            handleShow={this.handleShow}
            students={this.state.students}
          />
          
        )}
        </article>
        </section>
        );
  }
}
export default App;
