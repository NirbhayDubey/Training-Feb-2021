// import React, { Component } from "react";
// import StudentService from "./../services/StudentService";

// export default class Details extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       currentStudent: "",
//       students: "",

//     };
//     StudentService.getStudentById(this.props.match.params.id).then((res) => {
//       this.setState({
//         currentStudent: res.data[0],
//       });
//     });
//     StudentService.getStudents().then((res) => {
//       this.setState({
//         students: res.data,
//       });
//     });
//   }
//   delete = (id) => {
//     StudentService.deleteStudent(id).then((res) => {
//       console.log(res);
//     });
//     this.props.history.push("/");
//   };

//  edit=(id)=>{
//   this.props.history.push(`/update-student/${id}`);
//  }

//   render() {
//     console.log(currentStudent.Id);

//     return (
//       <div className="container mb-5  ">
//         <table className="table w-50 mt-3 mx-auto">
//           <h3 className="h5 mt-5 mb-3"> Student Details: </h3>
//           <tbody>
//             <tr>
//               <td>Student Id</td>
//               <td>{currentStudent.Id}</td>
//             </tr>
//             <tr>
//               <td>First Name</td>
//               <td>{currentStudent.fname}</td>
//             </tr>
//             <tr>
//               <td>Middle Name:</td>
//               <td>{currentStudent.mname}</td>
//             </tr>
//             <tr>
//               <td>Last Name:</td>
//               <td>{currentStudent.lname}</td>
//             </tr>
//           </tbody>
//         </table>

//         <table className="table w-50 mt-3 mx-auto">
//           <h3 className="h5 mt-5">Father Details: </h3>
//           <tbody>
//             <tr>
//               <td>First Name</td>
//               <td>{currentStudent.ffname}</td>
//             </tr>
//             <tr>
//               <td>Middle Name:</td>
//               <td>{currentStudent.fmname}</td>
//             </tr>
//             <tr>
//               <td>Last Name:</td>
//               <td>{currentStudent.flname}</td>
//             </tr>
//           </tbody>
//         </table>

//         <table className="table w-50 mt-3 mx-auto">
//           <h3 className="h5 mt-5 ">Academic Details: </h3>
//           <tbody>
//             <tr>
//               <td>College Name</td>
//               <td>{currentStudent.collegeName}</td>
//             </tr>
//             <tr>
//               <td>Degree</td>
//               <td>{currentStudent.selectedDegree}</td>
//             </tr>
//           </tbody>
//         </table>

//         <table className="table w-50 mt-3 mx-auto ">
//           <h3 className="h5 mt-5 mb-3">Address Details: </h3>
//           <tbody>
//             <tr>
//               <td>Country </td>
//               <td>{currentStudent.selectedCountry}</td>
//             </tr>
//             <tr>
//               <td>State</td>
//               <td>{currentStudent.selectedState}</td>
//             </tr>
//             <tr>
//               <td>City </td>
//               <td>{currentStudent.selectedCity}</td>
//             </tr>
//           </tbody>
//         </table>
//         <table className="table w-50 mt-3 mx-auto ">
//           <h3 className="h5 mt-5 mb-3">Other Details: </h3>
//           <tbody>
//             <tr>
//               <td>E-mail : </td>
//               <td>{currentStudent.email}</td>
//             </tr>
//             <tr>
//               <td>DOB :</td>
//               <td>{currentStudent.DOB}</td>
//             </tr>
//           </tbody>
//         </table>
//         <div className="mx-auto text-center">
//           <button
//             className="btn btn-primary w-25 m-3"
//             onClick={() => this.edit(this.props.match.params.id)}
//           >
//             Edit
//           </button>
//           <button
//             className="btn btn-danger w-25"
//             onClick={() => this.delete(this.props.match.params.id)}
//           >
//             Delete
//           </button>
//         </div>
//       </div>
//     );
//   }
// }

import React from "react";
import { useEffect, useState } from "react";
import StudentService from "./../services/StudentService";

export const Details = (props) => {
  const [currentStudent, setCurrentStudent] = useState({});
  useEffect(() => {
    StudentService.getStudentById(props.match.params.id).then((res) => {
      setCurrentStudent(res.data[0]);
    });
  });
  const Delete = (id) => {
    StudentService.deleteStudent(id).then((res) => {
      console.log(res.data);
    });
    props.history.push("/");
  };
  const Edit = (id) => {
    props.history.push(`/update-student/${id}`);
  };
  return (
    <div className="container mb-5  ">
      <table className="table w-50 mt-3 mx-auto">
        <h3 className="h5 mt-5 mb-3"> Student Details: </h3>
        <tbody>
          <tr>
            <td>Student Id</td>
            <td>{currentStudent.Id}</td>
          </tr>
          <tr>
            <td>First Name</td>
            <td>{currentStudent.fname}</td>
          </tr>
          <tr>
            <td>Middle Name:</td>
            <td>{currentStudent.mname}</td>
          </tr>
          <tr>
            <td>Last Name:</td>
            <td>{currentStudent.lname}</td>
          </tr>
        </tbody>
      </table>

      <table className="table w-50 mt-3 mx-auto">
        <h3 className="h5 mt-5">Father Details: </h3>
        <tbody>
          <tr>
            <td>First Name</td>
            <td>{currentStudent.ffname}</td>
          </tr>
          <tr>
            <td>Middle Name:</td>
            <td>{currentStudent.fmname}</td>
          </tr>
          <tr>
            <td>Last Name:</td>
            <td>{currentStudent.flname}</td>
          </tr>
        </tbody>
      </table>

      <table className="table w-50 mt-3 mx-auto">
        <h3 className="h5 mt-5 ">Academic Details: </h3>
        <tbody>
          <tr>
            <td>College Name</td>
            <td>{currentStudent.collegeName}</td>
          </tr>
          <tr>
            <td>Degree</td>
            <td>{currentStudent.selectedDegree}</td>
          </tr>
        </tbody>
      </table>

      <table className="table w-50 mt-3 mx-auto ">
        <h3 className="h5 mt-5 mb-3">Address Details: </h3>
        <tbody>
          <tr>
            <td>Country </td>
            <td>{currentStudent.selectedCountry}</td>
          </tr>
          <tr>
            <td>State</td>
            <td>{currentStudent.selectedState}</td>
          </tr>
          <tr>
            <td>City </td>
            <td>{currentStudent.selectedCity}</td>
          </tr>
        </tbody>
      </table>
      <table className="table w-50 mt-3 mx-auto ">
        <h3 className="h5 mt-5 mb-3">Other Details: </h3>
        <tbody>
          <tr>
            <td>E-mail : </td>
            <td>{currentStudent.email}</td>
          </tr>
          <tr>
            <td>DOB :</td>
            <td>{currentStudent.DOB}</td>
          </tr>
        </tbody>
      </table>
      <div className="mx-auto text-center">
        <button
          className="btn btn-primary w-25 m-3"
          onClick={() => Edit(props.match.params.id)}
        >
          Edit
        </button>
        <button
          className="btn btn-danger w-25"
          onClick={() => Delete(props.match.params.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
