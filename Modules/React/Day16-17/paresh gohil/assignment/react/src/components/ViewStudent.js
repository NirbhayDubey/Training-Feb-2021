import React, { useState,useEffect } from 'react'
import StudentService from "../services/Studentservice"

const ViewStudent = (props) => {

        const [student,setStudent] = useState({})

        const [id,setId] = useState(props.match.params.id)

    useEffect(() => {
        StudentService.getStudentById(id).then((res) => {
            setStudent(res.data[0]);
        });
    },[id])

    const deleteStudent =(id) =>{
        StudentService.deleteStudent(id).then( res => {
            setStudent({...student,student: student.filter(student => student.id !== id)});
        });
        props.history.push("/");
    }

    const UpdateStudent = (id) =>{
        props.history.push(`/update-student/${id}`);
    }

        return (
            <div>
                 <br></br>
                <div className = "card col-md-6 offset-md-3 bg-dark text-white text-center mb-3">
                    <h3 className = "card-header bg-white text-dark mt-2"> View Student Details</h3>
                    <div className = "card-body">
                            <img src={student.images} alt="images"/> 
                            <h6> ID : { student.id }</h6>
                            <h6> Name : { student.firstName } { student.middleName } { student.lastName }</h6>
                            <h6> DOB : {student.DOB}</h6>
                            <h6> PlaceofBirth : {student.PlaceofBirth}</h6>
                            <h6> age : {student.age}</h6>
                            <h6> first_language : {student.first_language}</h6>
                            <h6> city : {student.city}</h6>
                            <h6> State : {student.State}</h6>
                            <h6> country : {student.country}</h6>
                            <h6> pin: {student.pin}</h6>
                            <h2 className="py-2 text-danger">Father Details</h2>
                            <h6> Father Name : {student.F_FirstName} {student.F_MiddleName} {student.F_LastName}</h6>
                            <h6> F_Email : {student.F_Email}</h6>
                            <h6> F_Education_Qualification : {student.F_Education_Qualification}</h6>
                            <h6> F_Profession : {student.F_Profession}</h6>
                            <h6> F_Designation : {student.F_Designation}</h6>
                            <h6> F_Phone : {student.F_Phone}</h6>
                            <h2 className="py-2 text-danger">Mother Details</h2>
                            <h6> Mother Name : {student.M_FirstName} {student.M_LastName} {student.M_MiddleName}</h6>
                            <h6> M_Email : {student.M_Email}</h6>
                            <h6> M_Education_Qualification : {student.M_Education_Qualification}</h6>
                            <h6> M_Profession : {student.M_Profession}</h6>
                            <h6> M_Designation : {student.M_Designation}</h6>
                            <h6> M_Phone : {student.M_Phone}</h6>
                            <h6> Emergency_Contact : {student.Emergency_Contact}</h6>
                            <h2 className="py-2 text-danger">Reference Details</h2>
                            <h6> R_Name : {student.R_Name}</h6>
                            <h6> R_Relation : {student.R_Relation}</h6>
                            <h6> R_Number : {student.R_Number}</h6>
                            <h6> R_Address : {student.R_Address}</h6>
                            <h2 className="py-2 text-danger">College Details</h2>  
                            <h6> collegeName : {student.collegeName}</h6>
                            <img src={student.logoimage} alt="logoimages"/>

                    </div>
                    <div className="btn-group mt-3 mb-3">
                        <button className="btn btn-success w-25 mr-5" onClick={() => UpdateStudent(student.id)}>Update</button>&nbsp;
                        <button className="btn btn-danger w-25" onClick={() => deleteStudent(student.id)}>Delete</button>
                    </div>
                </div>
            </div>
        )
    }


export default ViewStudent