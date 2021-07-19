import React, { useState,useEffect } from 'react'
import StudentService from "../services/Studentservice"

const ListStudent = (props) => {

    const [students,setStudent] = useState([])

    useEffect(() =>{
        StudentService.getStudents().then((res) => {
            console.log(res.data)
            setStudent(res.data);
        });

    },[])

    const viewStudent = (id) =>{
        props.history.push(`/view-student/${id}`);
    }

    const addStudent = () =>{
        props.history.push('/add-student/');
    }

        return (
            <div>
                <div className = "row">
                    <button className="btn btn-primary mt-3" style={{marginLeft: "280px"}} onClick={addStudent}> Add Student</button>
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
                                students.map(
                                    student => 
                                    <tr key = {student.id}>
                                        <td> {student.id}</td>
                                         <td> {student.firstName} </td>   
                                         <td> {student.lastName}</td>
                                         <td>
                                             <button style={{marginLeft: "10px"}} onClick={ () => viewStudent(student.id)} className="btn btn-info">View </button>
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

export default ListStudent