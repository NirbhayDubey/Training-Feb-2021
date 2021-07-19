import React from 'react';

const id = '1224', name = 'Vats Patel' , dob = '08-02-1999';

const Personal = (props) => {
  //console.log(props.Student1)
 return(
  <section>
    <div className="div1">
      Student ID :<br/>
    </div>
    <div>
      {props.Student1.id} <br/>
    </div>
    <div className="div1">
      Student Name :<br/>
    </div>
    <div>
      {props.Student1.name} <br/>
    </div>
    <div className="div1">
      Date of Birth :<br/>
    </div>
    <div>
      {props.Student1.dob} <br/>
    </div>
  </section>
 )
}

export default Personal