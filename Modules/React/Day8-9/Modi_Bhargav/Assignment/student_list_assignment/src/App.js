import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import FormInput from "./components/FormInput";
import CardData from "./components/cardData";

export default class App extends Component {
  state = {
    students: [],
    id: uuidv4(),
    img: "",
    logo: "",
    Er_Number: "",
    firstName: "",
    lastName: "",
    DOB: "",
    gender: "",
    collegeName: "",
    Location: "",
    checkbox: false,
    editItem: false,
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value.toUpperCase(),
    });
  };

  handleCheckbox = (e) => {
    this.setState({
      [e.target.name]: e.target.checked,
    });
  };

  onChangeImges = (e) => {
    this.setState(
      {
        [e.target.name]: URL.createObjectURL(e.target.files[0]),
      },
      () => console.log(e.target.files[0])
    );
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const studentData = {
      id: this.state.id,
      Number: this.state.Er_Number,
      fName: this.state.firstName,
      lName: this.state.lastName,
      dob: this.state.DOB,
      gender1: this.state.gender,
      colName: this.state.collegeName,
      location: this.state.Location,
      pick: this.state.img,
      logo1: this.state.logo,
    };
    console.log("student data", studentData);
    if (this.state.checkbox === true) {
      const addData = [...this.state.students, studentData];
      this.setState({
        students: addData,
        id: uuidv4(),
        img: "",
        logo: "",
        Er_Number: "",
        firstName: "",
        lastName: "",
        DOB: "",
        gender: "",
        collegeName: "",
        Location: "",
        checkbox: false,
        editItem: false,
      });
    } else {
      alert("Please select your data is sure and checked");
    }
  };

  clearList = () => {
    this.setState({
      students: [],
    });
  };

  handleDelete = (id) => {
    const filterItems = this.state.students.filter((item) => item.id !== id);
    this.setState({
      students: filterItems,
    });
  };

  handleEdit = (id) => {
    const filterItems = this.state.students.filter((item) => item.id !== id);
    const selectedItem = this.state.students.find((item) => item.id === id);
    this.setState({
      students: filterItems,
      Er_Number: selectedItem.Number,
      firstName: selectedItem.fName,
      lastName: selectedItem.lName,
      DOB: selectedItem.dob,
      gender: selectedItem.gender1,
      collegeName: selectedItem.colName,
      Location: selectedItem.location,
      img: selectedItem.pick,
      logo: selectedItem.logo1,
      id: id,
      checkbox: true,
      editItem: true,
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3
              className="text-capitilize text-center bg-success mt-1 text-Info"
              style={{ border: "2px solid black" }}
            >
              Student Form
              <FormInput
                student={this.state}
                // checkbox={this.state.checkbox}
                handleChange={this.handleChange}
                handleCheckbox={this.handleCheckbox}
                handleImges={this.onChangeImges}
                handleSubmit={this.handleSubmit}
                editItem={this.state.editItem}
              />
            </h3>
            <CardData
              students={this.state.students}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
              clearList={this.clearList}
            />
          </div>
        </div>
      </div>
    );
  }
}
