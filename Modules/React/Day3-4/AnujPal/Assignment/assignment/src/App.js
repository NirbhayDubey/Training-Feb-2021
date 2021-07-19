import ReactDOM from "react-dom";
import React, { Component } from "react";
import students from "./studentData";
import StudentInfo from "./StudentInfo";
import "bootstrap/dist/css/bootstrap.css";
import studentData from "./studentData";

export default class StudentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: studentData,
    };
  }
  render() {
    return (
      <section className="container">
        <h2 className="text-center mt-3">These Are Some Student Information</h2>
        <div className="border border-primary mt-5">
          {this.state.students.map((item, index) => (
            <StudentInfo key={item.ID} info={item}></StudentInfo>
          ))}
        </div>
      </section>
    );
  }
}
