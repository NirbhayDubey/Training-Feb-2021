import { Component, OnInit , Input } from '@angular/core';
import { Student } from '../Istudent';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

  @Input() public studentList:Array<Student> =[];

  constructor() { }

  ngOnInit(): void {
  }


}