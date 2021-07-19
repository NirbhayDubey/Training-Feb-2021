import { Component, OnInit } from '@angular/core';
import { Student } from '../Istudent';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  public StudentList : Array<Student> = [];

  constructor(private studentService : StudentServiceService) { }

  ngOnInit(): void {
    this.StudentList = this.studentService.getAllStudent();
  }

}
