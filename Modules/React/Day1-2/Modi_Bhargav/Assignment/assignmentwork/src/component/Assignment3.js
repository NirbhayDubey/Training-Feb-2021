// Store above example info javascript variable and then display dynamically, Display FullName variable in respective Component

import React from 'react';

function StudentIdCard (){
  return(
      <section className="student">
          <Images/>
          <Student/>
          <College/>
      </section>
  );
}

const img = "https://randomuser.me/api/portraits/thumb/men/12.jpg", logo = "Gujarat-Technological-University-Logo.png"
const Images = () => {
 return(
  <article>
   <img id="p1" width="80px" src={img} alt="student img"/>
   <img id="p2" width="80px" src={logo} alt="college logo"/> 
  </article>
 )
}

const id = "2",FirstName = "meet", LastName = "Shah", DOB = "21/01/2003";
const Student = () => {
 return(
  <article>
      <h4>ID : {id}</h4>
      <h4>FullName : {FirstName + " " + LastName}</h4>
      <h4>DOB : {DOB}</h4>
  </article>
 )
}

const CollegeName = 'NIT', Address = 'Surat';
function College (){
  return (
    <article>
      <h4>collegeName : {CollegeName}</h4>
      <h4>Address : {Address}</h4>
    </article>
  );
}

export default StudentIdCard