import React, { Component } from 'react'
import "../App.scss"

export default class Student extends Component {
    constructor(props){
        super(props)
        this.state = {
            info : true
        }
    }

    changeinfo = () => {
        this.setState({
            info : !this.state.info
        })
    }

    render() {
        const {img,firstname,lastname,dob,college,address,collegelogo} = this.props.student
        const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`
        return (
            <article className="student" style={{width: "300px"}}>
                <div className="student1">
                    <img src= {url} width="60" alt="student images"/>
                    <hr className="bg-white text-center"></hr>
                    <h5>Name : {firstname + " " + lastname}</h5>
                    <h5>DOB : {dob}</h5>
                    <h5>College : {college}</h5>
                    <h5>Address : {address}</h5>
                    <img src= {collegelogo} width="40" alt="logo images"/><br/>
                    <button type="button" onClick={this.changeinfo}>toggle me</button>
                    <h6 style={{marginLeft : "42px"}}>{this.state.info?<p>Welcome</p>:null}</h6>
                </div>
            </article>
        )
    }
}
