import React, { Component } from 'react'
import StudentService from "../services/Studentservice"

export default class StudentIdCard extends Component {
    constructor(props) {
        super(props)

        this.state = {
                students: []
        }
    }

    componentDidMount(){
        StudentService.getStudents().then((res) => {
            this.setState({ students: res.data});
        });
    }

    render() {
        return (
            <div>
                 <br></br>
                {this.state.students.map(student =>
                <div className = "card col-md-6 offset-md-3 bg-dark text-white text-center mb-3">
                    <div className = "card-body">
                            <>
                            <img src={student.images} alt="images"/> 
                            <h6> ID : {student.id }</h6>
                            <h6> Name : {student.firstName } {student.middleName } {student.lastName }</h6>
                            <h6> DOB : {student.DOB}</h6>
                            <h6> age : {student.age}</h6>
                            <h6> collegeName : {student.collegeName}</h6>
                            <img src={student.logoimage} alt="logoimages"/>
                            </>                            

                    </div>
                </div>
                )}
            </div>
                
        )
    }
}
