import React from 'react'
import StudentIdCard from './StudentIdCard'
// import { MdDelete } from "react-icons/md";

const StudentList = ({studentList,handleEdit,handleDelete,clearList}) => {
  
    return (
      <div className="container">
        {studentList.map((studentIdcard) => (
          <StudentIdCard key={studentIdcard.Id}
            studentIdcard={studentIdcard}
            studentList={studentList}
            handleEdit={handleEdit}
            handleDelete={handleDelete}

          ></StudentIdCard>
        ))}

        <button
          className="btn btn-danger btn-center"
          onClick={clearList}
        >
          Clear All Id Card
          {/* <MdDelete className="btn-icon"></MdDelete> */}
        </button>
      </div>
    );
}

export default StudentList