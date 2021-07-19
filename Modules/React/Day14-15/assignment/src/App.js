import './App.css';
import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import StudentList from './components/StudentList';
import { StudentForm } from './components/StudentForm';
import StudentItem from './components/StudentItem';

const allData = [];
var id1 = '';

function App() {

  const [data, setData] = useState(allData)
  const [students, setStudents] = useState({
    id: uuidv4(),
    Enrollment: '',
    Name: '',
    clgName: '',
    clgAdd: '',
    logo: '',
    pic: ''
  })
  const [edit, setEdit] = useState(false)

  const handleSubmit = e => {
    e.preventDefault();

    const newData = {
      id: uuidv4(),
      Enrollment: students.Enrollment,
      Name: students.Name,
      clgName: students.clgName,
      clgAdd: students.clgAdd,
      logo: students.logo,
      pic: students.pic
    }

    setData([...data, newData]);

    setStudents({
      id: uuidv4(),
      Enrollment: '',
      Name: '',
      clgName: '',
      clgAdd: '',
      logo: '',
      pic: ''
    })
  }


  const handleChange = e => {
    setStudents({
      ...students,
      [e.target.name]: e.target.value
    })
  }

  const onPicChange = e => {
    setStudents({
      ...students,
      [e.target.name]: URL.createObjectURL(e.target.files[0])
    })
  }

  const clearList = () => {
    setData([]);
  }

  const handleDelete = (id) => {
    const tempData = data.filter((item) => item.id !== id)
    setData(tempData)
  }

  const handleEdit = (id) => {
    let tempData = data.find(item => item.id === id)
    const tempData1 = data.filter((item) => item.id !== id)
    setData(tempData1)
    console.log(tempData)
    id1 = tempData.id
    setStudents({
      Enrollment: tempData.Enrollment,
      Name: tempData.Name,
      clgName: tempData.clgName,
      clgAdd: tempData.clgAdd,
      logo: tempData.logo,
      pic: tempData.pic
    })

    setEdit(true)
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <StudentForm students={students} handleSubmit={handleSubmit} handleChange={handleChange} onPicChange={onPicChange} edit={edit} />
            <StudentList data={data} clearList={clearList} handleDelete={handleDelete} handleEdit={handleEdit} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
