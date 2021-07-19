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
        <h3 className="text-capitalize">student list</h3>
        <ul className="d-flex row-hl flex-row my-3 flex-wrap align-items-stretch">
          {students.map((student) => (
            <Student
              student={student}
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
