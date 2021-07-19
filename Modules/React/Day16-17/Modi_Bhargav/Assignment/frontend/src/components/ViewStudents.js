import React, { useState, useEffect } from "react";
import StudentService from "../Services/StudentService";

const ViewStudent = (props) => {
  const [students, setStudents] = useState(
    {
      enrollNumber: props.match.params.id,
    },
    []
  );

  useEffect(() => {
    StudentService.getStudentById(students.enrollNumber).then((res) => {
      console.log(res.data);
      setStudents(res.data);
    });
  }, [students.enrollNumber]);

  const editStudent = (id) => {
    props.history.push(`/edit-studentData/${id}`);
  };

  const deleteStudent = (id) => {
    StudentService.deleteStudent(id).then((res) => {
      props.history.push("/");
    });
  };

  const homeFunction = (e) => {
    e.preventDefault();
    StudentService.getStudents().then((res) => {
      props.history.push("/");
    });
  };

  return (
    <div className="container">
      <div class="row m-5 justify-content-center">
        <div className="mt-3 bg-dark" style={{ border: "2px solid red" }}>
          <h3 className="text-capitalize text-center text-white">
            Students Personal details
          </h3>
          <div className="card card-body bg-light my-3">
            <form className="row">
              <div className="col-md-3 mb-2" style={{ marginLeft: "50px" }}>
                <img
                  className="img-fulid"
                  id="p1"
                  width="100"
                  heigth="100"
                  src={students.Logo}
                  alt="student img"
                />
              </div>
              <div className="col-md-5 text-center text-dark h1">
                {students.collegeName +
                  "," +
                  students.Ccity +
                  "," +
                  students.Cstate}
              </div>
              <div className="col-md-3 mb-2 text-center">
                <img
                  className="rounded-circle img-fulid"
                  id="p2"
                  width="100"
                  src={students.Img}
                  alt="college logo"
                />
              </div>
              <div style={{ borderBottom: "3px solid red" }}></div>
              <div
                className="text-center text-primary  h1"
                style={{ borderBottom: "3px solid red" }}
              >
                Student Details
              </div>
              <div className="col-md-5 text-center text-success h3">
                Enrollment-Number
              </div>
              <div className="col-md-2 h3 text-center">{":----->"}</div>
              <div className="col-md-5 text-dark h3">
                {students.enrollNumber}
              </div>
              <div style={{ borderBottom: "2px solid black" }}></div>
              <div className="col-md-5 text-center text-success h3">
                Full Name
              </div>
              <div className="col-md-2 h3 text-center">{":----->"}</div>
              <div className="col-md-5 text-dark h3">
                {students.firstName +
                  " " +
                  students.middleName +
                  " " +
                  students.lastName}
              </div>
              <div style={{ borderBottom: "2px solid black" }}></div>
              <div className="col-md-5 text-center text-success h3">Gender</div>
              <div className="col-md-2 h3 text-center">{":----->"}</div>
              <div className="col-md-5 text-dark h3">{students.Gender}</div>
              <div style={{ borderBottom: "2px solid black" }}></div>
              <div className="col-md-5 text-center text-success h3">
                Date Of Birth
              </div>
              <div className="col-md-2 h3 text-center">{":----->"}</div>
              <div className="col-md-5 text-dark h3">{students.DOB}</div>
              <div style={{ borderBottom: "2px solid black" }}></div>
              <div className="col-md-5 text-center text-success h3">
                Email Id
              </div>
              <div className="col-md-2 h3 text-center">{":----->"}</div>
              <div className="col-md-5 text-dark h3">{students.Email}</div>
              <div style={{ borderBottom: "2px solid black" }}></div>
              <div className="col-md-5 text-center text-success h3">
                Phone Number
              </div>
              <div className="col-md-2 h3 text-center">{":----->"}</div>
              <div className="col-md-5 text-dark h3">
                {students.phoneNumber}
              </div>
              <div style={{ borderBottom: "2px solid black" }}></div>
              <div className="col-md-5 text-center text-success h3">
                Place Of Birth
              </div>
              <div className="col-md-2 h3 text-center">{":----->"}</div>
              <div className="col-md-5 text-dark h3">
                {students.placeOfBirth}
              </div>
              <div style={{ borderBottom: "2px solid black" }}></div>
              <div className="col-md-5 text-center text-success h3">
                Address
              </div>
              <div className="col-md-2 h3 text-center">{":----->"}</div>
              <div className="col-md-5 text-dark h3">
                {students.City + "," + students.State + "," + students.Country}
              </div>
              <div style={{ borderBottom: "3px solid red" }}></div>
              <div
                className="text-center text-primary mb-3 h1"
                style={{ borderBottom: "3px solid red" }}
              >
                Father's Details
              </div>
              <div className="col-md-5 text-center text-success h3">
                Full Name
              </div>
              <div className="col-md-2 h3 text-center">{":----->"}</div>
              <div className="col-md-5 text-dark h3">
                {students.ffirstName +
                  " " +
                  students.fmiddleName +
                  " " +
                  students.flastName}
              </div>
              <div style={{ borderBottom: "2px solid black" }}></div>
              <div className="col-md-5 text-center text-success h3">
                Email Id
              </div>
              <div className="col-md-2 h3 text-center">{":----->"}</div>
              <div className="col-md-5 text-dark h3">{students.Femail}</div>
              <div style={{ borderBottom: "2px solid black" }}></div>
              <div className="col-md-5 text-center text-success h3">
                phoneNumber
              </div>
              <div className="col-md-2 h3 text-center">{":----->"}</div>
              <div className="col-md-5 text-dark h3">{students.Fnumber}</div>
              <div style={{ borderBottom: "2px solid black" }}></div>
              <div className="col-md-5 text-center text-success h3">
                Education Qualification
              </div>
              <div className="col-md-2 h3 text-center">{":----->"}</div>
              <div className="col-md-5 text-dark h3">
                {students.feduQualific}
              </div>
              <div style={{ borderBottom: "2px solid black" }}></div>
              <div className="col-md-5 text-center text-success h3">
                Profession
              </div>
              <div className="col-md-2 h3 text-center">{":----->"}</div>
              <div className="col-md-5 text-dark h3">
                {students.Fprofession}
              </div>
              <div style={{ borderBottom: "2px solid black" }}></div>
              <div className="col-md-5 text-center text-success h3">
                Designation
              </div>
              <div className="col-md-2 h3 text-center">{":----->"}</div>
              <div className="col-md-5 text-dark h3">
                {students.Fdesignation}
              </div>
              <div style={{ borderBottom: "3px solid Red" }}></div>
              <div
                className="text-center text-primary mb-3 h1"
                style={{ borderBottom: "3px solid red" }}
              >
                Mother's Details
              </div>
              <div className="col-md-5 text-center text-success h3">
                Full Name
              </div>
              <div className="col-md-2 h3 text-center">{":----->"}</div>
              <div className="col-md-5 text-dark h3">
                {students.mfirstName +
                  " " +
                  students.mmiddleName +
                  " " +
                  students.mlastName}
              </div>
              <div style={{ borderBottom: "2px solid black" }}></div>
              <div className="col-md-5 text-center text-success h3">
                Email Id
              </div>
              <div className="col-md-2 h3 text-center">{":----->"}</div>
              <div className="col-md-5 text-dark h3">{students.Memail}</div>
              <div style={{ borderBottom: "2px solid black" }}></div>
              <div className="col-md-5 text-center text-success h3">
                phoneNumber
              </div>
              <div className="col-md-2 h3 text-center">{":----->"}</div>
              <div className="col-md-5 text-dark h3">{students.Mnumber}</div>
              <div style={{ borderBottom: "2px solid black" }}></div>
              <div className="col-md-5 text-center text-success h3">
                Education Qualification
              </div>
              <div className="col-md-2 h3 text-center">{":----->"}</div>
              <div className="col-md-5 text-dark h3">
                {students.meduQualific}
              </div>
              <div style={{ borderBottom: "2px solid black" }}></div>
              <div className="col-md-5 text-center text-success h3">
                Profession
              </div>
              <div className="col-md-2 h3 text-center">{":----->"}</div>
              <div className="col-md-5 text-dark h3">
                {students.Mprofession}
              </div>
              <div style={{ borderBottom: "2px solid black" }}></div>
              <div className="col-md-5 text-center text-success h3">
                Designation
              </div>
              <div className="col-md-2 h3 text-center">{":----->"}</div>
              <div className="col-md-5 text-dark h3">
                {students.Mdesignation}
              </div>
              <div style={{ borderBottom: "2px solid black" }}></div>
              <div className="col-md-6 text-center bg-light">
                <button
                  type="button"
                  className="btn btn-danger mt-4"
                  onClick={() => deleteStudent(students.enrollNumber)}
                  style={{ marginRight: "50px" }}
                >
                  Delete Data
                </button>
              </div>
              <div className="col-md-6 text-center bg-light">
                <button
                  type="button"
                  className="btn btn-success mt-4"
                  onClick={() => editStudent(students.enrollNumber)}
                >
                  Edit Data
                </button>
              </div>
              <div className="col-md-12 text-center">
                <button
                  type="button"
                  className="btn btn-block btn-primary text-white mt-3"
                  onClick={homeFunction}
                >
                  Back To Home Page
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewStudent;
