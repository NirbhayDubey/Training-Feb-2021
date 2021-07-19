// 2. Create a StudentIDCard Component which will include another component image,Personal Component include(ID,FirstName,LastName,DOB),College Component include collegeName,College Address and College Logo)

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

const Data = () => {
  return(
    <section>
      <img className="pic" width="80px" src="https://randomuser.me/api/portraits/thumb/men/52.jpg" alt=""/>
      <img className="logo" width="80px" src="gec.png" alt=""/> 
    </section>
  )
}

function CollegeComp (){
  return (
    <section>
      <div className="div1">
        college Name :<br/>
      </div>
      <div>
        Government eng. col. <br/>
      </div>
      <div className="div1">
        College Address :<br/>
      </div>
      <div>
        Modasa <br/>
      </div>
    </section>
  );
}

const Personal = () => {
  return(
    <section>
      <div className="div1">
        Student ID :<br/>
      </div>
      <div>
        1092 <br/>
      </div>
      <div className="div1">
        Student Name :<br/>
      </div>
      <div>
        mehul shah <br/>
      </div>
      <div className="div1">
        Date of Birth :<br/>
      </div>
      <div>
        11-02-1999 <br/>
      </div>
    </section>
  )
}



export default IDcard