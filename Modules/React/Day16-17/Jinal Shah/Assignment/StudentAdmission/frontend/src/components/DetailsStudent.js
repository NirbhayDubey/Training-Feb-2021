import React, { useState, useEffect } from 'react'
//import axios from 'axios';
import StudentService from '../services/StudentService'

export default function DetailsStudent(props) {

   const [students, setStudents] = useState([])
   const id = props.match.params.id

   useEffect(() => {
      StudentService.getStudentById(id).then(res => {
         setStudents(res.data[0])
      })
   }, [id])

   const editStudent = (id) => {
      props.history.push(`/edit-student/${id}`);
   }

   const deleteStudent = (id) => {
      console.log(`delete ${id}`)
      StudentService.deleteStudent(id).then(res => {
         props.history.push('/')
      });
   }

   console.log(students)
   return (
      <div className="col-sm-10 mx-auto mt-5 mb-5 pb-5">
         <div className="row m-2">
            <div className="col-sm-3 text-center">
               <button onClick={() => editStudent(id)} className="btn btn-info">Update </button>
            </div>
            <div className="col-sm-4"></div>
            <div className="col-sm-3 text-center">
               <button onClick={() => deleteStudent(id)} className="btn btn-danger">Delete </button>
            </div>
         </div>
         <table className="table border-dark">
            <tr>
               <td className="th1">Enrollment</td>
               <td className="th1">{id}</td>
            </tr>
            <tr>
               <td className="th1">Student Name</td>
               <td className="th1">{students.StudentFname} {students.StudentLname}</td>
            </tr>
            <tr>
               <td className="th1">Student Email</td>
               <td className="th1">{students.StudentEmail}</td>
            </tr>
            <tr>
               <td className="th1">First Language</td>
               <td className="th1">{students.Language}</td>
            </tr>
            <tr>
               <td className="th1">Date of birth</td>
               <td className="th1">{students.DateOfBirth}</td>
            </tr>
            <tr>
               <td className="th1">Place of birth</td>
               <td className="th1">{students.PlaceOfBirth}</td>
            </tr>
            <tr>
               <td className="th1">College Name</td>
               <td className="th1">{students.ClgName}</td>
            </tr>
            <tr>
               <td className="th1">College Logo</td>
               <td className="th1"><img src={students.Logo} width="80px" alt="clg logo" /></td>
            </tr>
            <tr>
               <td className="th1">Student photo</td>
               <td className="th1"><img src={students.Pic} width="80px" alt="student photo" /></td>
            </tr>
         </table>
      </div>

   )
}

/*
axios
   .get(STUDENT_API_BASE_URL + '/' + Enrollment)
   .then(res => {
      setStudents(res.data)
   })
   .catch(err => {
      console.log(err)
   }) */

