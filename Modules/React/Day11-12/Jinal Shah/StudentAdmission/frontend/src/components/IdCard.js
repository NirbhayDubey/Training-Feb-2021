import React, { Component } from 'react'
import StudentService from '../services/StudentService'

export default class IdCard extends Component {

   constructor(props) {
      super(props)
      this.state = {
         Enrollment: '',
         students: {},
         toggle: false
      }
   }

   handleChange = (e) => {
      this.setState({
         Enrollment: e.target.value
      })
   }

   datailsStudent = (id) => {
      console.log(id)
      StudentService.getStudentById(this.state.Enrollment).then(res => {
         this.setState({
            students: res.data[0],
            toggle: true
         });
      })

   }

   render() {
      console.log(this.state.students)
      return (
         <div className="col-sm-10 mx-auto mt-5 pb-5">
            <label className="ml-4">Enter Your Enrollment No :</label>
            <div className="col-sm-8">
               <input type="number" className="form-control" name="Enrollment" onChange={this.handleChange} />
            </div>
            <button onClick={() => this.datailsStudent(this.state.Enrollment)} className="btn btn-primary ml-4 mt-2"> Generate ID Card </button>

            { this.state.toggle ?
               <div class="card card-primary card-block border-dark m-5 mb-5" style={{ width: "18rem" }}>
                  <div class="card-body">
                     <section className="pb-4">
                        <img class="img rounded-circle" width="80px" src={this.state.students.Pic} alt="student" />
                        <img class="img1" width="80px" src={this.state.students.Logo} alt="college" />
                     </section>
                     <div className="text-center mt-5 pt-5">
                        <div>
                           Student Id :
                        </div>
                        <div>
                           {this.state.students.Enrollment}
                        </div>
                        <div>
                           Student name :
                        </div>
                        <div>
                           {this.state.students.StudentFname} {this.state.students.StudentLname}
                        </div>
                        <div>
                           College Name :
                        </div>
                        <div>
                           {this.state.students.ClgName}
                        </div>
                        <div>
                           College Address :
                        </div>
                        <div>
                           {this.state.students.ClgAdd}
                        </div>
                     </div>
                  </div>
               </div> : null}

            {/* <div class="card card-primary card-block" style={{ width: "18rem" }}>
               <div class="card-body">
                  <section className="pb-4">
                     <img class="img rounded-circle" width="80px" src={this.state.students.Pic} alt="student" />
                     <img class="img1" width="80px" src={this.state.students.Logo} alt="college" />
                  </section>
                  <div className="text-center mt-5 pt-5">
                     <div>
                        Student Id :
                        </div>
                     <div>
                        {this.state.students.Enrollment}
                     </div>
                     <div>
                        Student name : {this.state.students.StudentFname} {this.state.students.StudentLname}
                     </div>
                     <div>
                        College Name : {this.state.students.ClgName} <br />
                     </div>
                     <div>
                        College Address : {this.state.students.ClgAdd}
                     </div>
                  </div>
               </div>
            </div> */}

         </div>
      )
   }
}
