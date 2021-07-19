import React, { Component } from "react";
import studentData from "../data/studentData";
import StudentIdCard from "./StudentIdCard";

export default class StudentList extends Component {
  state = {
    students: studentData,
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
          />
        ))}
      </div>
    );
  }
}
