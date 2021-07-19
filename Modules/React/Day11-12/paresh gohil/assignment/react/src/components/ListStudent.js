import React, { Component } from 'react'
import StudentService from "../services/Studentservice"

export default class ListStudent extends Component {
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

    viewStudent = (id) =>{
        this.props.history.push(`/view-student/${id}`);
    }

    addStudent = () =>{
        this.props.history.push('/add-student/');
    }

    render() {
        return (
            <div>
                <div className = "row">
                    <button className="btn btn-primary mt-3" style={{marginLeft: "280px"}} onClick={this.addStudent}> Add Student</button>
                </div>
                <br></br>
                <div className="row">
                    <table className = "table table-striped table-bordered w-50" style={{marginLeft: "280px"}}>
                        <thead className="thead-dark">
                            <tr>
                                <th> ID</th>
                                <th> First Name</th>
                                <th> Last Name</th>
                                <th> Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.students.map(
                                    student => 
                                    <tr key = {student.id}>
                                        <td> {student.id}</td>
                                         <td> {student.firstName} </td>   
                                         <td> {student.lastName}</td>
                                         <td>
                                             <button style={{marginLeft: "10px"}} onClick={ () => this.viewStudent(student.id)} className="btn btn-info">View </button>
                                         </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
