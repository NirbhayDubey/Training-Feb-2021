import React, { Component } from "react";
import studentData from "../../data/studentData";
import StudentIdCard from "./StudentIdCard";

// 1. Reference to day2 assignment, StudentID Card Should contain delete button and should delete remove that from booklist component. Need to use the concept passing methods to children.

export default class StudentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: studentData,
    };
  }

  deleteStudent = (id) => {
    const filterStud = this.state.students.filter(
      (item) => item.personal.id !== id
    );
    this.setState({
      students: filterStud,
    });
  };

  render() {
    console.log(this.state);
    return (
      <div className="row">
        {this.state.students.map((item) => (
          <StudentIdCard
            className="col-md-6"
            key={item.personal.id}
            student={item}
            deleteStudent={this.deleteStudent}
          >
            <h5>Student Info:</h5>
          </StudentIdCard>
        ))}
      </div>
    );
  }
}
