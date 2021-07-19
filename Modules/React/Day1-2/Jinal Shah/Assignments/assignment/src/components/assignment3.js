// 3. Store above example info javascript variable and then display dynamically, Display FullName variable in respective Component

import React from 'react';

function IDcard (){
  return(
    <section className="student1">
      <div className="s1">
        <Data></Data>
      </div>
      <div className="s2">
        <Personal></Personal>
        <CollegeComp></CollegeComp>
      </div>
    </section>
  );
}

const img = "https://randomuser.me/api/portraits/thumb/men/52.jpg", pic = "gec.png";
const Data = () => {
 return(
  <section>
   <img className="pic" width="80px" src={img} alt=""/>
   <img className="logo" width="80px" src={pic} alt=""/> 
  </section>
 )
}

const CN = 'Government eng. col.', CA = 'Modasa';
function CollegeComp (){
  return (
   <section>
    <div className="div1">
      college Name :<br/>
    </div>
    <div>
      {CN} <br/>
    </div>
    <div className="div1">
      College Address :<br/>
    </div>
    <div>
      {CA} <br/>
    </div>
  </section>
  );
}

const id = "1092",name = "mehul shah", dob = "11-02-1999";
const Personal = () => {
 return(
  <section>
    <div className="div1">
      Student ID :<br/>
    </div>
    <div>
      {id} <br/>
    </div>
    <div className="div1">
      Student Name :<br/>
    </div>
    <div>
      {name} <br/>
    </div>
    <div className="div1">
      Date of Birth :<br/>
    </div>
    <div>
      {dob} <br/>
    </div>
  </section>
 )
}



export default IDcard