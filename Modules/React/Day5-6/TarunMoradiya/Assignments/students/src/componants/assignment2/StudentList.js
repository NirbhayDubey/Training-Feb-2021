import React, { Component } from "react";
import studentData from "../../data/studentData";
import StudentIdCard from "./StudentIdCard";

// 2. Add one toggle button in StudentIdCard Component, implement toggle functionality using ternary operator in JSX.

export default class StudentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: studentData,
    };
  }

  render() {
    console.log(this.state);
    return (
      <div className="row">
        {this.state.students.map((item) => (
          <StudentIdCard
            className="col-md-6"
            key={item.personal.id}
            student={item}
          >
            <h5>Student Info:</h5>
          </StudentIdCard>
        ))}
      </div>
    );
  }
}
