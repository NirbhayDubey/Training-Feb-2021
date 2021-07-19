import React from 'react'
import logo from "../Img/Collegelogo.png";



const StudentIdCard = ({ url, children,addr,Id,firstname,lastName,DOB,collegeName,handleDelete,handleEdit }) => {
  console.log(Id);
  return (
    <div className="container">
      <div className="row ">
        <div className="col-sm-18">
          <div className="card-body text-dark border-danger ">
            <div className="card-body ">
              {children}
              <img
                src={url}
                width="80"
                alt="StudentImg"
                className="card-img-top "
              />
              <img src={logo} width="50" alt="colleglogo" className="ml-3" />
              <h5 className="card-text color-primary">Id: {Id}</h5>
              <h6>Name: {firstname + " " + lastName}</h6>
              <h6>DOB:{DOB}</h6>
              <h6>CollegeName:{collegeName}</h6>
              <h6>Addr:{addr}</h6>
              <br />
              <br />
              <button
                type="button"
                className="btn-primary border-dark"
                onClick={() => handleEdit(Id)}
              >
                Edit this Card
              </button>
              <button
                type="button"
                className="btn-primary border-dark ml-2"
                onClick={() => handleDelete(Id)}
              >
                Delete this card
              </button>
              <hr />
              {/* <img src={img}>logo:{logo}</img> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentIdCard