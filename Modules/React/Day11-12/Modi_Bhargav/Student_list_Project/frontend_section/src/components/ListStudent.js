import React, { Component } from "react";
import StudentService from "../Services/StudentService";
import Footer from "./Footer";

export default class ListStudent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      students: [],
    };
  }

  componentDidMount() {
    StudentService.getStudents().then((res) => {
      this.setState({ students: res.data });
    });
  }

  viewStudent = (id) => {
    this.props.history.push(`/view-studentCard/${id}`);
  };

  deleteStudent = (id) => {
    StudentService.deleteStudent(id).then((res) => {
      this.setState({
        students: this.state.students.filter(
          (student) => student.enrollNumber !== id
        ),
      });
    });
  };
  render() {
    return (
      <div className="container">
        <h2 className="text-center text-white my-3">Students List</h2>
        <div className="row">
          <table
            className="table table-hover"
            style={{ border: "3px solid black" }}
          >
            <thead className="table-dark">
              <tr>
                <th className="text-center"> Enroll Number</th>
                <th className="text-center"> Full Name</th>
                <th className="text-center"> college Name</th>
                <th className="text-center"> Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.students.map((student) => (
                <tr
                  className="table-light"
                  // style={{ border: "2px solid black" }}
                  key={student.enrollNumber}
                >
                  <td className="t1"> {student.enrollNumber} </td>
                  <td className="t1">
                    {student.firstName +
                      " " +
                      student.middleName +
                      " " +
                      student.lastName}
                  </td>
                  <td className="t1">{student.collegeName}</td>
                  <td className="t1">
                    <button
                      style={{ marginLeft: "20px" }}
                      onClick={() => this.deleteStudent(student.enrollNumber)}
                      className="btn btn-danger"
                    >
                      Delete Data
                    </button>
                    <button
                      style={{ marginLeft: "20px" }}
                      onClick={() => this.viewStudent(student.enrollNumber)}
                      className="btn btn-success"
                    >
                      More Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Footer />
      </div>
    );
  }
}
