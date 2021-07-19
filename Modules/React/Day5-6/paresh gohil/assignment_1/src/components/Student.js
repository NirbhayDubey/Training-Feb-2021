import React, { Component } from 'react'
import "../App.scss"

export default class Student extends Component {
    render() {
        const {img,id,firstname,lastname,dob,college,address,collegelogo} = this.props.student
        const {handleDelete} = this.props
        const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`
        return (
            <article className="student" style={{width: "300px"}}>
                <div className="student1">
                    <img src= {url} width="60" alt="student images"/>
                    <hr className="bg-white"></hr>
                    <h5>Name : {firstname + " " + lastname}</h5>
                    <h5>DOB : {dob}</h5>
                    <h5>College : {college}</h5>
                    <h5>Address : {address}</h5>
                    <img src= {collegelogo} width="40" alt="logo images"/><br/>
                    <button type="button" onClick={() => handleDelete(id)}>delete me</button>
                </div>
            </article>
        )
    }
}
