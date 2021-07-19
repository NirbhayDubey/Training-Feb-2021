// Call StudentID Card component 3 times and pass different student data using props.

import React from 'react';
import p1 from "../static/img1/Gujarat-Technological-University-Logo.png";
import p2 from "../static/img2/images1.png";
import p3 from "../static/img3/download.png";

function StudentList(){
 
 const img = 1 , logo = p1 , ID = 1 , FirstName = "Bhargav",LastName = "Modi",DOB = "20/12/1998",collegeName = "GEC",Address = "Patan"

 const img1 = 2,logo1 = p2, ID1 = 2,FirstName1 = "Rohit",LastName1 = "Sharma",DOB1 = "10/05/2001",collegeName1 = "LD",Address1 = "Ahemdabad"
 
 const img2 = 3,logo2 = p3, ID2 = 3,FirstName2 = "Mohit",LastName2 = "Raval",DOB2 = "15/02/1999",collegeName2 = "NIT",Address2 = "Surat"

 return(
   <section className="student-list">
     <StudentIdCard img={img} logo = {logo} id={ID} FirstName = {FirstName} LastName = {LastName} DOB ={DOB} CollegeName = {collegeName} Address = {Address}/>

     <StudentIdCard img={img1} logo = {logo1} id={ID1} FirstName = {FirstName1} LastName = {LastName1} DOB ={DOB1} CollegeName = {collegeName1} Address = {Address1}/>

     <StudentIdCard img={img2} logo = {logo2} id={ID2} FirstName = {FirstName2} LastName = {LastName2} DOB ={DOB2} CollegeName = {collegeName2} Address = {Address2}/>
     
   </section>
 );
}

function StudentIdCard (props){
  return(
      <section className="student">
          <Images img = {props.img} logo = {props.logo}/>
          <Student id = {props.id} FirstName = {props.FirstName} LastName = {props.LastName} DOB = {props.DOB}/>
          <College collegeName = {props.CollegeName} Address = {props.Address}/>
      </section>
  );
}


const Images = (props) => {
 var url = `https://randomuser.me/api/portraits/thumb/men/${props.img}.jpg`
 return(
  <article>
   <img id="p1" width="80px" src={url} alt="student img"/>
   <img id="p2" width="80px" src={props.logo} alt="college logo"/> 
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