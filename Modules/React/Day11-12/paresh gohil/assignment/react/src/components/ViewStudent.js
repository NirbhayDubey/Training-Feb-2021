import React, { Component } from 'react'
import StudentService from "../services/Studentservice"

export default class ViewStudent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            student: {}
        }
    }

    componentDidMount(){
        StudentService.getStudentById(this.state.id).then((res) => {
            this.setState({ student: res.data[0]});
        });
    }

    deleteStudent(id){
        StudentService.deleteStudent(id).then( res => {
            this.setState({student: this.state.student.filter(student => student.id !== id)});
        });
        this.props.history.push("/");
    }

    UpdateStudent(id){
        this.props.history.push(`/update-student/${id}`);
    }

    render() {
        return (
            <div>
                 <br></br>
                <div className = "card col-md-6 offset-md-3 bg-dark text-white text-center mb-3">
                    <h3 className = "card-header bg-white text-dark mt-2"> View Student Details</h3>
                    <div className = "card-body">
                            <img src={this.state.student.images} alt="images"/> 
                            <h6> ID : { this.state.student.id }</h6>
                            <h6> Name : { this.state.student.firstName } { this.state.student.middleName } { this.state.student.lastName }</h6>
                            <h6> DOB : {this.state.student.DOB}</h6>
                            <h6> PlaceofBirth : {this.state.student.PlaceofBirth}</h6>
                            <h6> age : {this.state.student.age}</h6>
                            <h6> first_language : {this.state.first_language}</h6>
                            <h6> city : {this.state.student.city}</h6>
                            <h6> State : {this.state.student.State}</h6>
                            <h6> country : {this.state.student.country}</h6>
                            <h6> pin: {this.state.student.pin}</h6>
                            <h2 className="py-2 text-danger">Father Details</h2>
                            <h6> Father Name : {this.state.student.F_FirstName} {this.state.student.F_MiddleName} {this.state.student.F_LastName}</h6>
                            <h6> F_Email : {this.state.student.F_Email}</h6>
                            <h6> F_Education_Qualification : {this.state.student.F_Education_Qualification}</h6>
                            <h6> F_Profession : {this.state.student.F_Profession}</h6>
                            <h6> F_Designation : {this.state.student.F_Designation}</h6>
                            <h6> F_Phone : {this.state.student.F_Phone}</h6>
                            <h2 className="py-2 text-danger">Mother Details</h2>
                            <h6> Mother Name : {this.state.student.M_FirstName} {this.state.student.M_LastName} {this.state.student.M_MiddleName}</h6>
                            <h6> M_Email : {this.state.student.M_Email}</h6>
                            <h6> M_Education_Qualification : {this.state.student.M_Education_Qualification}</h6>
                            <h6> M_Profession : {this.state.student.M_Profession}</h6>
                            <h6> M_Designation : {this.state.student.M_Designation}</h6>
                            <h6> M_Phone : {this.state.student.M_Phone}</h6>
                            <h6> Emergency_Contact : {this.state.student.Emergency_Contact}</h6>
                            <h2 className="py-2 text-danger">Reference Details</h2>
                            <h6> R_Name : {this.state.student.R_Name}</h6>
                            <h6> R_Relation : {this.state.student.R_Relation}</h6>
                            <h6> R_Number : {this.state.student.R_Number}</h6>
                            <h6> R_Address : {this.state.student.R_Address}</h6>
                            <h2 className="py-2 text-danger">College Details</h2>  
                            <h6> collegeName : {this.state.student.collegeName}</h6>
                            <img src={this.state.student.logoimage} alt="logoimages"/>

                    </div>
                    <div className="btn-group mt-3 mb-3">
                        <button className="btn btn-success w-25 mr-5" onClick={() => this.UpdateStudent(this.state.student.id)}>Update</button>&nbsp;
                        <button className="btn btn-danger w-25" onClick={() => this.deleteStudent(this.state.student.id)}>Delete</button>
                    </div>
                </div>
            </div>
        )
    }
}
