import React from 'react';

function CollegeComp (props){
  return (
   <section>
    <div className="div1">
      college Name :<br/>
    </div>
    <div>
      {props.Student1.cn} <br/>
    </div>
    <div className="div1">
      College Address :<br/>
    </div>
    <div>
      {props.Student1.ca} <br/>
    </div>
  </section>
  );
}

export default CollegeComp



/* 
    <div className="div1">
      logo :<br/>
    </div>
    <div className="logodiv">
      <img className="logo" width="50px" src="vgec.png" alt=""/> 
    </div> 
*/