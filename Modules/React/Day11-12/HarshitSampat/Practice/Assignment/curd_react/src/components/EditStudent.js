    import React, { Component } from 'react'
    import StudentService from '../services/Studentservice'

    export default class EditStudent extends Component {
    constructor(props) {
        super(props);

        this.state = {
        studentId: this.props.match.params.id,
        firstName: "",
        lastName: "",
        emailId: "",
        };
    }
        componentDidMount(){
            StudentService.getStudentById(this.state.studentId).then((res) => {
            let student = res.data;
            console.log(student)
            this.setState({
                firstName: student[0].firstName,
                lastName: student[0].lastName,
                fatherName:student[0].fatherName
            });
            });
        }
        handleChange =(e)=>{
            this.setState({
                firtName:e.target.value
            })
        };
        updateStudent=(e)=>{
            e.preventDefault()
            StudentService.updateStudent(this.state,this.state.studentId).then(res=>{
                this.props.history.push('/')
            }
            )
        }
    render() {
        console.log(this.state)
        return <div>
            <form>
                <div className = "form-group">
                    <label> First Name: </label>
                    <input placeholder="First Name" name="firstName" className="form-control" 
                        value={this.state.firtName} onChange={this.handleChange}/>
                </div>

                <button className="btn btn-success" onClick={this.updateStudent}>Update</button>
            </form>
        </div>;
    }
    }
