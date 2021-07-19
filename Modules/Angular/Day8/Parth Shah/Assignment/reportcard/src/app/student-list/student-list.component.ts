import { Component, OnInit } from '@angular/core';
import {Student} from './Student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})


export class StudentListComponent implements OnInit {

 
  studentList:Array<Student>=[];
  constructor()
  {
    this.studentList=[{ID:1,Name:'Parth',Age:12,Grade:'A',Average:80,Active:true},
                    {ID:2,Name:'Kush',Age:12,Grade:'B',Average:65,Active:true},
                    {ID:3,Name:'Jethiya',Age:12,Grade:'C',Average:40,Active:true},
                    {ID:4,Name:'champak',Age:12,Grade:'A',Average:85,Active:false},
                    {ID:5,Name:'mehta',Age:12,Grade:'B',Average:70,Active:true},
                    {ID:6,Name:'charlie',Age:12,Grade:'A',Average:80,Active:true},
                    {ID:7,Name:'nandu Bhide',Age:13,Grade:'A',Average:80,Active:true}];
  }

  ID:0;
  Name:"";
  Average:0;
  Age:0;
  Grade:"";

  edit(item)
  {
    this.ID = item.ID;
  this.Name = item.Name;
  this.Average = item.Average;
  this.Grade = item.Grade;
  this.Age = item.Age;
  }
    remove(index)
    {
      this.studentList.splice(index,1);
      console.log(this.studentList);
    }
  
    update()
    {
  var item = this.studentList.find(a=>a.ID==this.ID);
  item.Name = this.Name;
  item.Average = this.Average;
  item.Grade = this.Grade;
  item.Age = this.Age;




    }
    

  ngOnInit(): void {
  }

}
