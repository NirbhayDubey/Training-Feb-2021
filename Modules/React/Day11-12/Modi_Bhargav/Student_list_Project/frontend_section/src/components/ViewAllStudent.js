import React, { Component } from "react";
import StudentService from "../Services/StudentService";

class ViewAllStudent extends Component {
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

  handleEdit = (id) => {
    this.props.history.push(`/edit-studentData/${id}`);
  };

  handleDelete = (id) => {
    StudentService.deleteStudent(id).then((res) => {
      this.setState({
        students: this.state.students.filter(
          (student) => student.enrollNumber !== id
        ),
      });
    });
  };

  homeFunction = (e) => {
    e.preventDefault();
    StudentService.getStudents().then((res) => {
      this.props.history.push("/");
    });
  };

  render() {
    return (
      <div class="row mt-5 justify-content-center">
        <h3 className="text-capitalize text-center text-white bg-dark">
          All Students Cards
        </h3>
        {this.state.students.map((student) => (
          <div
            className="m-3 col-12 col-sm-6 col-md-4"
            style={{ width: "20rem" }}
            key={student.enrollNumber}
          >
            <div className="card-body bg-dark mb-0">
              <div className="imges m-2">
                <img
                  className="rounded-circle bg-light"
                  id="p1"
                  width="80"
                  heigth="80"
                  src={student.Img}
                  alt="student img"
                  style={{ marginRight: "80px" }}
                />
                <img
                  className="img-fulid"
                  id="p2"
                  width="80"
                  src={student.Logo}
                  alt="college logo"
                />
              </div>
              <div className="text-center text-info h1">Student Id</div>
              <ul className="list-group list-group-flush text-dark">
                <li className="list-group-item border border-info">
                  EnrollNumber : {student.enrollNumber}
                </li>
                <li className="list-group-item border border-info">
                  Name :
                  {student.firstName +
                    " " +
                    student.middleName +
                    " " +
                    student.lastName}
                </li>
                <li className="list-group-item border border-info">
                  Date Of Birth : {student.DOB}
                </li>
                <li className="list-group-item border border-info">
                  gender : {student.Gender}
                </li>
                <li className="list-group-item border border-info">
                  CollegeName : {student.collegeName}
                </li>
                <li className="list-group-item border border-info">
                  Location : {student.Ccity}
                </li>
              </ul>
              <div className="card-footer bg-primary">
                <button
                  type="button"
                  class="btn btn-danger my-3 ml-2"
                  onClick={() => this.handleDelete(student.enrollNumber)}
                  style={{ marginRight: "30px" }}
                >
                  Delete Data
                </button>
                <button
                  type="button"
                  class="btn btn-success my-3 ml-2"
                  onClick={() => this.handleEdit(student.enrollNumber)}
                >
                  Edit Data
                </button>
              </div>
            </div>
          </div>
        ))}
        <button
          type="button"
          className="btn btn-block btn-success"
          onClick={this.homeFunction}
        >
          Back To Home Page
        </button>
      </div>
    );
  }
}

export default ViewAllStudent;
