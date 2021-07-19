// 4. Call StudentID Card component 3 times and pass different student data using props.

import React from 'react';

function IDcard (props){
  return(
    <section className="student1">
      <div className="s1">
        <Data img={props.img} pic={props.pic}></Data>
      </div>
      <div className="s2">
        <Personal id={props.id} name={props.name} dob={props.dob}></Personal>
        <CollegeComp cn={props.cn} ca={props.ca}></CollegeComp>
      </div>
    </section>
  );
}


const Data = (props) => {
 return(
  <section>
   <img className="pic" width="80px" src={props.img} alt=""/>
   <img className="logo" width="80px" src={props.pic} alt=""/> 
  </section>
 )
}

function CollegeComp (props){
  return (
   <section>
    <div className="div1">
      college Name :<br/>
    </div>
    <div>
      {props.cn} <br/>
    </div>
    <div className="div1">
      College Address :<br/>
    </div>
    <div>
      {props.ca} <br/>
    </div>
  </section>
  );
}

const Personal = (props) => {
 return(
  <section>
    <div className="div1">
      Student ID :<br/>
    </div>
    <div>
      {props.id}<br/>
    </div>
    <div className="div1">
      Student Name :<br/>
    </div>
    <div>
      {props.name} <br/>
    </div>
    <div className="div1">
      Date of Birth :<br/>
    </div>
    <div>
      {props.dob}<br/>
    </div>
  </section>
 )
}

function Student(){
 
 const img = "https://randomuser.me/api/portraits/thumb/men/52.jpg", pic = "gec.png", cn = 'Government eng. col.', ca = 'Modasa',id = "1092",name = "mehul shah", dob = "11-02-1999";
 const img1 = "https://randomuser.me/api/portraits/thumb/men/45.jpg", pic1 = "vgec.png", cn1 = 'Vishwakarma gov. eng.', ca1 = 'Gandhinagar',id1 = "1386",name1 = "vats patel", dob1 = "01-07-2000";
 const img2 = "https://randomuser.me/api/portraits/thumb/men/28.jpg", pic2 = "saec.png", cn2 = 'SACE eng. col.', ca2 = 'Ahmedabad',id2 = "0375",name2 = "tanish vyas", dob2 = "25-12-2000";


 return(
   <section className="list">
     <IDcard img={img} pic={pic} id={id} name={name} dob={dob} cn={cn} ca={ca}/>
     <IDcard img={img1} pic={pic1} id={id1} name={name1} dob={dob1} cn={cn1} ca={ca1}/>
     <IDcard img={img2} pic={pic2} id={id2} name={name2} dob={dob2} cn={cn2} ca={ca2}/>
   </section>
 );
}


export default Student