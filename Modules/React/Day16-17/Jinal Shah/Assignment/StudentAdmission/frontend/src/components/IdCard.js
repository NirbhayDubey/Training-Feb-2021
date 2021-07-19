import React, { useState } from 'react'
import StudentService from '../services/StudentService'

export default function IdCard(props) {

   const [Enrollment, setEnrollment] = useState()
   const [students, setStudents] = useState([])
   const [toggle, setToggle] = useState(false)

   const handleChange = (e) => {
      setEnrollment([e.target.value])
   }

   const datailsStudent = (id) => {
      StudentService.getStudentById(Enrollment).then(res => {
         setStudents(res.data[0])
         setToggle(true)
      })

   }

   console.log(students)
   return (
      <div className="col-sm-10 mx-auto mt-5 pb-5">
         <label className="ml-4">Enter Your Enrollment No :</label>
         <div className="col-sm-8">
            <input type="number" className="form-control" name="Enrollment" onChange={handleChange} />
         </div>
         <button onClick={() => datailsStudent(Enrollment)} className="btn btn-primary ml-4 mt-2"> Generate ID Card </button>

         { toggle ?
            <div class="card card-primary card-block border-dark m-5 mb-5" style={{ width: "18rem" }}>
               <div class="card-body">
                  <section className="pb-4">
                     <img class="img rounded-circle" width="80px" src={students.Pic} alt="student" />
                     <img class="img1" width="80px" src={students.Logo} alt="college" />
                  </section>
                  <div className="text-center mt-5 pt-5">
                     <div>
                        Student Id :
                        </div>
                     <div>
                        {students.Enrollment}
                     </div>
                     <div>
                        Student name :
                        </div>
                     <div>
                        {students.StudentFname} {students.StudentLname}
                     </div>
                     <div>
                        College Name :
                        </div>
                     <div>
                        {students.ClgName}
                     </div>
                     <div>
                        College Address :
                        </div>
                     <div>
                        {students.ClgAdd}
                     </div>
                  </div>
               </div>
            </div> : null}

      </div>
   )
}

