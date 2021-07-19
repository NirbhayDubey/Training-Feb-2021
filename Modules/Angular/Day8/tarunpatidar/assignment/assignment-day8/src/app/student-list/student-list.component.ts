import { Component, OnInit } from '@angular/core';
import { Istudent } from '../Istudent';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  studentList : Array<Istudent> = [];

  constructor() 
  { 
    this.studentList = [
      { Id : 1 , Name : 'Tarun' , Age : 22 , Average : 150 , Grade : 'A' , Active : true},
      { Id : 2 , Name : 'Rohit' , Age : 22 , Average : 120 , Grade : 'B' , Active : true},
      { Id : 3 , Name : 'Kohli' , Age : 22 , Average : 100 , Grade : 'C' , Active : false},
      { Id : 4 , Name : 'Hardik' , Age : 22 , Average : 80 , Grade : 'D' , Active : true},
      { Id : 5 , Name : 'Dhawan' , Age : 22 , Average : 50 , Grade : 'E' , Active : true}
    ]
  }

  ngOnInit(): void {
  }

}
