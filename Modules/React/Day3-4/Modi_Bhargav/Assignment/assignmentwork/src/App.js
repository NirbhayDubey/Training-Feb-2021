import React , {Component} from 'react'
import Student from './component/StudentsIdCard/studentIdCard'
import StudentData from './component/StudentList/studentlist'
import './App.css'

// use class

export default class App extends Component {
  render() {
    return (
      <div>
        <Element/>
        <hr/>
        <StudentList/>
      </div>
    )
  }
}

class StudentList extends Component {

  constructor(props){
    super(props)
    this.state = {
          Students : StudentData
      };
  }
  
  render() {
    /*const student = this.state.Students.map((item) => item.FirstName)
    console.log(student)*/
    return (
      <div class ="container mt-2">
        <div class ="row">
        {this.state.Students.map((item,index) => (
          <Student key = {item.id} info = {item}>
            <h3>Students Info</h3>
          </Student>
        ))}
        </div>
      </div> 
    )
  }
}


function Element() {
  return (
    <div>
      <h1 class="text-primary text-center">Students List</h1>
    </div>
  )
}






