// 5. Create Students Array of 3 students with field Image,Id,FirstName,LastName,DOB,CollegeName,Address and CollegeLogo and pass it as Object to the StudentIDCardComponent.


import React from 'react';

function IDcard (props){
  return(
    <section className="student1">
      <div className="s1">
        <Data img={props.obj.img} pic={props.obj.pic}></Data>
      </div>
      <div className="s2">
        <Personal id={props.obj.id} name={props.obj.name} dob={props.obj.dob}></Personal>
        <CollegeComp cn={props.obj.cn} ca={props.obj.ca}></CollegeComp>
      </div>
    </section>
  );
}


const Data = (props) => {
  const img = props.img
  const url =`https://randomuser.me/api/portraits/thumb/men/${img}.jpg`
 return(
  <section>
   <img className="pic" width="80px" src={url} alt=""/>
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
 
  var obj = [
{ id:"1386",name:"vats patel",dob:"01-07-2000",cn:"Vishwakarma gov. eng.",ca:"Gandhinagar", img :"45", pic:"vgec.png"},
{ id:"1092",name:"mehul shah",dob:"11-02-1999",cn:"Government eng. col.",ca:"Modasa",img :"52",pic:"gec.png"},
{ id:"0375",name:"tanish vyas",dob:"25-12-2000",cn:"SACE eng. col.",ca:"Ahmedabad",img :"28", pic:"saec.png"}
]

 return(
   <section className="list">
     <IDcard obj = {obj[0]}/>
     <IDcard obj = {obj[1]}/>
     <IDcard obj = {obj[2]}/>
   </section>
 );
}


export default Student