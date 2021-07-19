import React, { Component } from 'react'
import StudentService from '../services/StudentService'

export default class DetailsStudent extends Component {

   constructor(props) {
      super(props)
      this.state = {
         Enrollment: this.props.match.params.id,
         students: {}
      }
   }

   componentDidMount() {
      StudentService.getStudentById(this.state.Enrollment).then(res => {
         let stud = res.data;
         this.setState({
            students: stud[0]
         });
      })
   }

   editStudent = (id) => {
      this.props.history.push(`/edit-student/${id}`);
   }

   deleteStudent = (id) => {
      console.log(`delete ${id}`)
      /* StudentService.deleteStudent(id).then(res => {
         this.setState({ students: this.state.students.filter(student => student.Enrollment !== id) });
      }); */
   }

   render() {
      console.log(this.state.students)
      return (
         <div className="col-sm-10 mx-auto mt-5 mb-5 pb-5">
            <div className="row m-2">
               <div className="col-sm-3 text-center">
                  <button onClick={() => this.editStudent(this.state.Enrollment)} className="btn btn-info">Update </button>
               </div>
               <div className="col-sm-4"></div>
               <div className="col-sm-3 text-center">
                  <button onClick={() => this.deleteStudent(this.state.Enrollment)} className="btn btn-danger">Delete </button>
               </div>
            </div>
            <table className="table border-dark text-center">
               <tr>
                  <th className="th1">Enrollment</th>
                  <th className="th1">{this.state.Enrollment}</th>
               </tr>
               <tr>
                  <th className="th1">Student Name</th>
                  <th className="th1">{this.state.students.StudentFname} {this.state.students.StudentLname}</th>
               </tr>
               <tr>
                  <th className="th1">Student Email</th>
                  <th className="th1">{this.state.students.StudentEmail}</th>
               </tr>
               <tr>
                  <th className="th1">First Language</th>
                  <th className="th1">{this.state.students.Language}</th>
               </tr>
               <tr>
                  <th className="th1">Date of birth</th>
                  <th className="th1">{this.state.students.DateOfBirth}</th>
               </tr>
               <tr>
                  <th className="th1">Place of birth</th>
                  <th className="th1">{this.state.students.PlaceOfBirth}</th>
               </tr>
               <tr>
                  <th className="th1">College Name</th>
                  <th className="th1">{this.state.students.ClgName}</th>
               </tr>
               <tr>
                  <th className="th1">College Logo</th>
                  <th className="th1"><img src={this.state.students.Logo} width="80px" alt="clg logo" /></th>
               </tr>
               <tr>
                  <th className="th1">Student photo</th>
                  <th className="th1"><img src={this.state.students.Pic} width="80px" alt="student photo" /></th>
               </tr>
            </table>
         </div>

      )
   }
}
