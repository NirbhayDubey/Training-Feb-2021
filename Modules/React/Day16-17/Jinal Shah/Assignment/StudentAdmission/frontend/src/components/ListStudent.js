import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export default function ListStudent() {

   const [students, setStudents] = useState([])
   const history = useHistory();

   useEffect(() => {
      axios
         .get("http://localhost:5000/student")
         .then(res => {
            setStudents(res.data)
         })
         .catch(err => {
            console.log(err)
         })

   }, [])


   const datailsStudent = (id) => {
      history.push(`/details-student/${id}`)
   }

   return (
      <>
         <div className="col-sm-10 mx-auto mt-5">

            <table className="table border-dark">

               <thead className="thead bg-dark text-white" style={{ border: '2px solid white' }}>
                  <tr className="tr1">
                     <td className="th1">Enrollment</td>
                     <td className="th1">Name</td>
                     <td className="th1">College</td>
                     <td className="th1"> Actions</td>
                  </tr>
               </thead>

               <tbody>
                  {
                     students.map(
                        students =>
                           <tr key={students.Enrollment} className="tr1">
                              <td className="th1"> {students.Enrollment}</td>
                              <td className="th1"> {students.StudentFname} {students.StudentLname}  </td>
                              <td className="th1">{students.ClgName}</td>
                              <td className="th1">
                                 <button onClick={() => datailsStudent(students.Enrollment)} className="btn btn-primary">More Details </button>
                              </td>
                           </tr>
                     )
                  }
               </tbody>
            </table>
         </div>
      </>
   )

}

