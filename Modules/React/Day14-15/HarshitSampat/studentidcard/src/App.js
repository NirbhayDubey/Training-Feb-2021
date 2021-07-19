import { React, useState } from "react";
import StudentForm from "./components/StudentForm";
import Studentlist from "./components/StudentList"

function App() {
  const [student, setStudent] = useState({
    firstName: "",
    lastName: "",
    middleName: "",
    Id: "",
    dob: "",
    collegeName: "",
    studentImg: "",
  });
  const [studentList, setStudentList] = useState([{show:false}]);
  

  //function to handle Chanage
  const handleChange = (e) => {
    if(e.target.name==="studentImg"){
      setStudent({
        ...student,
        [e.target.name]:URL.createObjectURL(e.target.files[0])
      })
    }
    else{
    setStudent({ ...student, [e.target.name]: e.target.value });
    }
  };

  //to handle Submit 
  const handleSubmit = (e) => {
    e.preventDefault();
    const StudentList = {
      firstName: student.firstName,
      lastName: student.lastName,
      middleName: student.middleName,
      Id: student.Id,
      // handleSubmit={values.middleName}
      // handleChange={handleChange}
      dob: student.dob,
      collegeName: student.collegeName,
      studentImg: student.studentImg,
    };
    setStudentList([...studentList, StudentList]);
  };
  
  //Deletee student Id card
  const handleDelete = (id) => {
    let tempStudentList = studentList.filter((item) => item.Id !== id);
    setStudent(tempStudentList);
  };

  //Clear All the List
  const clearList = () => {
    setStudentList([]);
  };
  
  return (
    <div>
      <StudentForm
        firstName={student.firstName}
        lastName={student.lastName}
        middleName={student.middleName}
        Id={student.Id}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        dob={student.dob}
        collegeName={student.collegeName}
        studentImg={student.studentImg}
      />
      <Studentlist studentList={studentList} clearList={clearList} handleDelete={handleDelete}/>
    </div>
  );
}
export default App;
