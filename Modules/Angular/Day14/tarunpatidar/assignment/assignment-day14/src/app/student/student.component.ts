import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from '../student-service.service';
import {Student} from  '../Istudent';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  public StudentDetails:Array<Student>=[];
  s : Student = {id:24,name:"Tarun",std:11,age:22};

  constructor(public studentService : StudentServiceService) { }

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