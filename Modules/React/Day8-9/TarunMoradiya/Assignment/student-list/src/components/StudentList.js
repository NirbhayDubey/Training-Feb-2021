import React from "react";
import Student from "./Student";

export default function StudentList({
  students,
  handleDelete,
  clearList,
  handleEdit,
}) {
  if (students.length > 0) {
    return (
      <React.Fragment>
        <ul className="list-group my-3">
          <h3 className="text-capitalize">student list</h3>
          {students.map((student) => (
            <Student
              key={student.id}
              firstName={student.firstName}
              lastName={student.lastName}
              img={student.img}
              collegeName={student.collegeName}
              collegeLogo={student.collegeLogo}
              handleDelete={() => handleDelete(student.id)}
              handleEdit={() => handleEdit(student.id)}
            />
          ))}
        </ul>
        <button
          className="btn btn-danger btn-block text-capitalize"
          onClick={clearList}
        >
          clear list
        </button>
      </React.Fragment>
    );
  } else {
    return null;
  }
}
