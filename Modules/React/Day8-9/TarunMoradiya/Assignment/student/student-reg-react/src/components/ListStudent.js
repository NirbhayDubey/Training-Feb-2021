import React, { Component } from "react";
import studentService from "../services/StudentServices";

class ListStudent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      students: [],
    };
  }

  viewStudent = (id) => {
    this.props.history.push(`/details/${id}`);
  };

  addStudent = () => {
    console.log("add");
    this.props.history.push("/create");
  };

  componentDidMount() {
    studentService.getStudents().then((res) => {
      console.log(res.data);
      this.setState({ students: res.data });
    });
  }

  render() {
    return (
      <div className="container">
        <h2 className="text-center">Students List</h2>

        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th> Student Name</th>
                <th> email</th>
                <th> contact</th>
                <th> Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.students.map((student) => (
                <tr key={student._id}>
                  <td>
                    {" "}
                    {`${student.firstName} ${student.middleName} ${student.lastName}`}{" "}
                  </td>
                  <td> {student.email}</td>
                  <td> {student.phone}</td>
                  <td>
                    <button
                      style={{ marginLeft: "10px" }}
                      onClick={() => this.viewStudent(student._id)}
                      className="btn btn-info"
                    >
                      View{" "}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListStudent;
