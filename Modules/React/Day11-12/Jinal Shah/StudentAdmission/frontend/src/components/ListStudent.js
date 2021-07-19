import React, { Component } from 'react'
import StudentService from '../services/StudentService'

export default class ListStudent extends Component {

   constructor(props) {
      super(props)
      this.state = {
         students: []
      }
   }

   componentDidMount(id) {
      StudentService.getStudents().then((res) => {
         this.setState({ students: res.data });
      });
   }

   datailsStudent = (id) => {
      this.props.history.push(`/details-student/${id}`)
   }


   render() {
      console.log(this.state.students)
      return (
         <>
            <div className="col-sm-10 mx-auto mt-5">

               <table className="table border-dark text-center">

                  <thead className="bg-light text-dark">
                     <tr>
                        <th className="th1">Enrollment</th>
                        <th className="th1">Name</th>
                        <th className="th1">College</th>
                        <th className="th1">College Logo</th>
                        <th className="th1"> Actions</th>
                     </tr>
                  </thead>
                  <tbody>
                     {
                        this.state.students.map(
                           students =>
                              <tr key={students.Enrollment} className="tr1">
                                 <td className="th1"> {students.Enrollment}</td>
                                 <td className="th1"> {students.StudentFname} {students.StudentLname}  </td>
                                 <td className="th1">{students.ClgName}</td>
                                 <td className="th1"><img src={students.Logo} width="80px" /></td>
                                 <td>
                                    <button onClick={() => this.datailsStudent(students.Enrollment)} className="btn btn-primary">More Details </button>
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
}
