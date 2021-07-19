import React from 'react'
import StudentIdCard from './StudentIdCard'
import { MdDelete } from "react-icons/md";

const StudentList = ({students,clear_All_Id_Card,handleEdit,handleDelete}) => {
    return (
      <div className="container">
        <StudentIdCard
            handleEdit={handleEdit}
            handleDelete={handleDelete}
        ></StudentIdCard>
         
          <button className="btn btn-danger btn-center" onClick={clear_All_Id_Card}>
            Clear All Id Card
            <MdDelete className="btn-icon"></MdDelete>
          </button>
        
      </div>
    );
}

export default StudentList