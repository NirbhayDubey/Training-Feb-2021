import { Component, OnInit } from '@angular/core';
import { Student } from '../Models/Students';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  studentList:Array<Student>=[];
  constructor(private ServiceService : ServiceService) { 
    this.studentList= ServiceService.stuList();
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
