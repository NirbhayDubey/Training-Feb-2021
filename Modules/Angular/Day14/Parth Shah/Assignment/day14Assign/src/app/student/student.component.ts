import { Component, OnInit } from '@angular/core';
import { Student } from '../Models/Students';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  studentList:Array<Student>=[];
  constructor(private ServiceService : ServiceService) { 
    this.studentList= ServiceService.stuList();
  }

  student:Student = {  ID:0,
    Name:"",
    Average:0,
    Age:0,
    Grade:""};  
  submitData()
  {
    this.ServiceService.addStudent(this.student);
  }

  ngOnInit(): void {
  }

}
