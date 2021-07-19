import React from 'react';

/* function IDcard (props){
  return(
    <section className="student1">
      <div className="s1">
        <Data img={props.obj.img} pic={props.obj.pic}></Data>
      </div>
      <div className="s2">
        <Personal id={props.obj.id} name={props.obj.name} dob={props.obj.dob}></Personal>
        <CollegeComp cn={props.obj.cn} ca={props.obj.ca}></CollegeComp>
        {props.children}
      </div>
    </section>
  );
} */

function IDcard (props){
  return(
    <div class="card-group m-5">
      <div class="card bg-light text-center border-info font-weight-bold" style={{width : '20rem', fontSize:'20px'}}>
        <div class="card-body">
          <Data img={props.obj.img} pic={props.obj.pic}></Data>
          <Personal id={props.obj.id} name={props.obj.name} dob={props.obj.dob}></Personal>
          <CollegeComp cn={props.obj.cn} ca={props.obj.ca}></CollegeComp>
          {props.children}
        </div>
      </div>
    </div>
  );
}


const Data = (props) => {
  const img = props.img
  const url =`https://randomuser.me/api/portraits/thumb/men/${img}.jpg`
 return(
  <section>
   <img class="float-left" width="80px" src={url} alt=""/>
   <img class="float-right" width="80px" src={props.pic} alt=""/> 
  </section>
 )
}

function CollegeComp (props){
  return (
   <section>
    <div>
      College Name :<br/>
    </div>
    <div>
      {props.cn} <br/>
    </div>
    <div>
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
  <section class="pt-5 mt-5">
    <div>
      ID : {props.id}<br/>
    </div>
    <div>
      Name : {props.name}<br/>
    </div>
    <div>
      Date of Birth : {props.dob}<br/>
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
    <div class="row">
      <IDcard obj = {obj[0]}>
        <p class="text-danger font-weight-bold">Performance and grade is not so good</p>
      </IDcard><br/>
      <IDcard obj = {obj[1]}>
        <p class="text-info font-weight-bold">Performance and grade is excellent</p>
      </IDcard><br/>
      <IDcard obj = {obj[2]}>
        <p class="text-success font-weight-bold">Performance and grade is average</p>
      </IDcard>
    </div>
  );
}


export default Student