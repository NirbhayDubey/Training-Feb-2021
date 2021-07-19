

import React from 'react'

export default function CollegeComponent(props) {


    return (
        <article>
          <div className="card-body">
            <h5 className="card-title text-center">College Details</h5>
            <h4 className="h6 mt-3">CollegeName : {props.collegeName}</h4>
            <h4 className="h6 mt-3">Address : {props.Address}</h4>
            <hr className="bg-primary "></hr>
    
            <img
              className="rounded mx-auto d-block"
              style={{ height: "150px", width: "150px" }}
              src={props.srcc}
              alt=""
            />
             
          </div>
   
        </article>
      );
}
