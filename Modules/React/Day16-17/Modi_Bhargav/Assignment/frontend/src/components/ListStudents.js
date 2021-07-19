import React, { useState, useEffect } from "react";
import StudentService from "../Services/StudentService";
import Footer from "./Footer";

const ListStudent = (props) => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    StudentService.getStudents().then((res) => {
      setStudents(res.data);
    });
  }, []);

  const viewStudent = (id) => {
    props.history.push(`/view-studentCard/${id}`);
  };

  const deleteStudent = (id) => {
    StudentService.deleteStudent(id).then((res) => {
      let sortData = students.filter((student) => student.enrollNumber !== id);
      setStudents(sortData);
    });
  };

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
            {students.map((student) => (
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
                    onClick={() => deleteStudent(student.enrollNumber)}
                    className="btn btn-danger"
                  >
                    Delete Data
                  </button>
                  <button
                    style={{ marginLeft: "20px" }}
                    onClick={() => viewStudent(student.enrollNumber)}
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
};

export default ListStudent;
