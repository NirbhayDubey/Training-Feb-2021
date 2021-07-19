import React, { useState, useEffect } from "react";
import studentServices from "../services/StudentServices";

export default function ListStudents(props) {
  const [students, setStudents] = useState([]);

  const viewStudent = (id) => {
    props.history.push(`/details/${id}`);
  };

  useEffect(() => {
    studentServices.getStudents().then((res) => {
      setStudents(res.data);
    });
  }, []);

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
            {students.map((student) => (
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
                    onClick={() => viewStudent(student._id)}
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
