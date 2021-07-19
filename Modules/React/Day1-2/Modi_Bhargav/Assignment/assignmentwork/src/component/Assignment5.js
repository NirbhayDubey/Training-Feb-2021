// 5. Create Students Array of 3 students with field Image,Id,FirstName,LastName,DOB,CollegeName,Address and CollegeLogo and pass it as Object to the StudentIDCardComponent.

// 6. While calling StudentID Component in the app Component pass one <p>Student Details</p> as children. Access it in the StudentID Card Component with Children props.

import React, { Children } from 'react'
import p1 from "../static/img1/Gujarat-Technological-University-Logo.png";
import p2 from "../static/img2/images1.png";
import p3 from "../static/img3/download.png";


const StudentList = () => {
  var obj = [
  {img:1,logo:p1, ID:1,FirstName:"Bhargav",LastName:"Modi",DOB:"20/12/1998",collegeName:"GEC",Address:"Patan"},
  {img:2,logo:p2, ID:2,FirstName:"Rohit",LastName:"Sharma",DOB:"10/05/2001",collegeName:"LD",Address:"Ahemdabad"},
  {img:3,logo:p3, ID:3,FirstName:"Mohit",LastName:"Raval",DOB:"15/02/1999",collegeName:"NIT",Address:"Surat"}]

  return (
    <section className="student-list">
            <StudentIdCard info = {obj[0]}>
              <p>Student Details</p>
            </StudentIdCard>
            <StudentIdCard info = {obj[1]}>
              <p>Student Details</p>
            </StudentIdCard>
            <StudentIdCard info = {obj[2]}>
              <p>Student Details</p>
            </StudentIdCard>
    </section>
  )
}

function StudentIdCard(props) {
  const {img , logo, ID , FirstName , LastName , DOB , CollegeName, Address} = props.info
  return(
      <section className="student">
          {props.children}
          <Images img = {img} logo = {logo}/>
          <Student id = {ID} FirstName = {FirstName} LastName = {LastName} DOB = {DOB}/>
          <College collegeName = {CollegeName} Address = {Address}/>
      </section>
  );
}


const Images = (props) => {
  var url = `https://randomuser.me/api/portraits/thumb/men/${props.img}.jpg`
  return(
    <article>
      <img id="p1" width="80px" src={url} style = {{marginTop:"-50px"}} alt="student img"/>
      <img id="p2" width="80px" src={props.logo} style = {{marginTop:"-50px"}} alt="college logo"/> 
    </article>
  )    
}


const Student = (props) => {
  return(
  <article>
      <h4>ID : {props.id}</h4>
      <h4>FullName : {props.FirstName + " " + props.LastName}</h4>
      <h4>DOB : {props.DOB}</h4>
  </article>
  )
}

function College (props){
  return (
    <article>
      <h4>collegeName : {props.CollegeName}</h4>
      <h4>Address : {props.Address}</h4>
    </article>
  );
}

export default StudentList