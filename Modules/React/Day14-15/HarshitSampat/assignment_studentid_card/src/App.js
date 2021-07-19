
// import './App.css';
import StudentForm from './components/StudentForm';
import StudentIdCard from './components/StudentIdCard';
import StudentList from './components/StudentList'
import {React,useState} from 'react';
//  import {uuid as v4} from 'uuid'
 

function App() {
  //set form
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    middleName: "",
    Id: "",
    handleSubmit: "",
    handleChange: "",
    dob: "",
    collegeName: "",
    studentImg: "",
  });
  const [{ firstName, lastName }, setValue] = useState("");
  const [students, setStudent] = useState("");
  const [StudentIdCard, setStudentIdcard] = useState({ show: false });

  const handleEdit = () => {};
  const handleDelete = () => {};
  const handleSubmit = (e) => {
    e.prevenDefault();
  };
  const handleChange = () => {
    setValues({
      ...values,
      firstName: values.firstName,
      lastName: values.lastName,
      middleName: values.middleName,
      Id: values.Id,
      handleSubmit: {},
      handleChange: {},
      dob: values.dob,
      collegeName: values.collegeName,
      studentImg: values.studentImg,
    });
  };
  //clear all items
  const clear_All_Id_Card = () => {
    setStudent([]);
  };

  return (
    <div>
      <StudentForm handleChange={handleChange} />
      <StudentList
        students={values.students}
        firstName={values.firstName}
        lastName={lastName}
        middleName={values.middleName}
        Id={values.Id}
        dob={values.dob}
        collegeName={values.collegeName}
        studentImg={values.studentImg}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        clear_All_Id_Card={clear_All_Id_Card}
      />
    </div>
  );
}

export default App;
