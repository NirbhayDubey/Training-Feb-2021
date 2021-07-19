import React, { Component } from "react";
import "./App.css";
import { v4 as uuid } from "uuid";
import StudentInput from "./components/StudentInput";
import StudentList from "./components/StudentList";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      students: [],
      id: uuid(),
      firstName: "",
      lastName: "",
      img: "",
      collegeName: "",
      collegeLogo: "",
      editItem: false,
    };
  }

  handleChange = (e) => {
    const nam = e.target.name;
    let val = e.target.value;
    if (e.target.type === "file") {
      val = { path: val, file: e.target.files[0] };
    }
    console.log(val);
    this.setState({
      [nam]: val,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let myImg = this.state.img.path.split("\\");
    myImg = `img/${myImg[myImg.length - 1]}`;
    let myLogo = this.state.collegeLogo.path.split("\\");
    myLogo = `img/${myLogo[myLogo.length - 1]}`;
    const newStudent = {
      id: this.state.id,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      img: myImg,
      // img: this.state.img.file,
      collegeName: this.state.collegeName,
      // collegeLogo: this.state.collegeLogo.file,
      collegeLogo: myLogo,
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
        <div className="row">
          <div className="col-10 col-md-6 mx-auto">
            <StudentInput
              firstName={this.state.firstName}
              lastName={this.state.lastName}
              img={this.state.img}
              collegeName={this.state.collegeName}
              collegeLogo={this.state.collegeLogo}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
          </div>
          <div className="col-10 col-md-6 mx-auto">
            <StudentList
              students={this.state.students}
              handleDelete={this.handleDelete}
              clearList={this.clearList}
              handleEdit={this.handleEdit}
            />
          </div>
        </div>
      </div>
    );
  }
}
