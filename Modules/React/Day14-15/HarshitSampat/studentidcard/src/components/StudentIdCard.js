import React from 'react'
// import logo from "../Img/Collegelogo.png";



const StudentIdCard = ({
  handleDelete,
  handleEdit,
  studentIdcard
}) => {
  return (
    <>
        <div className="container">        
          <div className="row ">
            <div className="col-sm-18">
              <div className="card-body text-dark border-danger ">
                <div className="card-body ">
                  <img width="80" src={studentIdcard.studentImg} alt="StudentImg" className="card-img-top " />
                  {/* <img src={logo} width="50" alt="colleglogo" className="ml-3" /> */}
                  <h5 className="card-text color-primary">
                    Id: {studentIdcard.Id}
                  </h5>
                  <h6>
                    Name:{" "}
                    {studentIdcard.firstName + " "+ studentIdcard.middleName+" " + studentIdcard.lastName}
                  </h6>
                  <h6>DOB:{studentIdcard.dob}</h6>
                  <h6>CollegeName:{studentIdcard.collegeName}</h6>
                  <h6>Addr:{studentIdcard.addr}</h6>
                  <br />
                  <br />
                  <button
                    type="button"
                    className="btn-primary border-dark"
                    onClick={() => handleEdit(studentIdcard.Id)}
                  >
                    Edit this Card
                  </button>
                  <button
                    type="button"
                    className="btn-primary border-dark ml-2"
                    onClick={() => handleDelete(studentIdcard.Id)}
                  >
                    Delete this card
                  </button>
                  <hr />
                  {/* <img src={img}>logo:{logo}</img> */}
                </div>
              </div>
              ;
            </div>
            ;
          </div>
          ;
        </div>;
      
    </>
  );
};

export default StudentIdCard