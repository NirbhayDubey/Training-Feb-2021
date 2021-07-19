import { Component, OnInit,Input } from '@angular/core';
import { Student } from '../Model/interface';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  @Input() public studentList:Array<Student> =[];

  constructor() { }

  ngOnInit(): void {
  }

}
