import React, { Component } from 'react'

export default class Student extends Component {
    render() {
        const {img,firstname,lastname,dob,college,address,collegelogo} = this.props.student
        const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`
        return (
            <article className="card bg-secondary text-white text-center mb-3 mx-auto" style={{width: "300px"}}>
                <div className="card-body">
                <img src= {url} width="60" alt="student images"/>
                <hr className="bg-white"></hr>
                <h5>Name : {firstname + " " + lastname}</h5>
                <h5>DOB : {dob}</h5>
                <h5>College : {college}</h5>
                <h5>Address : {address}</h5>
                <img src= {collegelogo} width="40" alt="logo images"/>
                </div>
            </article>
        )
    }
}
