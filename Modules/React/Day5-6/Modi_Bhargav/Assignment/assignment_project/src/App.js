import React , {Component} from 'react'
import Student from './component/Students/studentIdCard'
import StudentData from './component/StudentList/studentlist'

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
          Students : StudentData,
      };
  }

  handleDelete = (ID) => {
    const sortStudent = this.state.Students.filter(item => item.ID !== ID)
    this.setState({
      Students : sortStudent
    })
  }

  
  render() {
    /*const student = this.state.Students.map((item) => item.FirstName)
    console.log(student)*/
    return (
      <div class ="container">
        <div class ="row m-3 justify-content-center">
        {this.state.Students.map((item,index) => (
          <Student key = {item.id} info = {item} handleDelete = {this.handleDelete}>
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






