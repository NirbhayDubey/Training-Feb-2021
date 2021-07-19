import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from '../student-service.service';
import {Student} from  '../Interface';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  public StudentDetails:Array<Student>=[];
  s : Student = {id:23,name:"Ram",std:9,age:25};

  constructor(public studentService :StudentServiceService) { }

  ngOnInit(): void {
    this.StudentDetails = this.studentService.getAllStudent();
  }
  change(){
    this.StudentDetails = this.studentService.getAllStudent();
  }
  deleteStudent(id : number){
    this.studentService.deleteStudent(id);
    this.change();
  }
  addStudent(student : Student){
    this.studentService.addStudent(student);
    this.change();
  }
  updateStudent(student : Student){
    this.studentService.updateStudent(student);
    this.change();
  }

}
