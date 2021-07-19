import React, { Component } from 'react'
import Images from './Images'
import Students from './student'
import Colleges from './college'

export default class Student extends Component {
 
  render() {

  const {img , logo, ID , FirstName, LastName, DOB, CollegeName, Address} = this.props.info

  return (
  
  <div class="card bg-dark m-3 font-weight-bold" style={  {width: "20rem"}}>
      <Images img = {img} logo = {logo} />
      <div class="card-body"> 
        <h6 class="card-title text-center text-primary"> {this.props.children} </h6>  
        <Students ID = {ID} FirstName = {FirstName} LastName = {LastName} DOB = {DOB}/>

        <Colleges CollegeName = {CollegeName} Location = {Address} />
      </div>
  </div>
    )
  }
}


