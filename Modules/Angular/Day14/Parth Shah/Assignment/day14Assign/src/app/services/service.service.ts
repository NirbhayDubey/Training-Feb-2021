import { Injectable } from '@angular/core';
import { Student } from '../Models/Students';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  studentList:Array<Student>=[];
  constructor()
  {
    this.studentList=[{ID:1,Name:'Parth',Age:12,Grade:'A',Average:80},
                    {ID:2,Name:'Kush',Age:12,Grade:'B',Average:65},
                    {ID:3,Name:'Jethiya',Age:12,Grade:'C',Average:40},
                    {ID:4,Name:'champak',Age:12,Grade:'A',Average:85},
                    {ID:5,Name:'mehta',Age:12,Grade:'B',Average:70},
                    {ID:6,Name:'charlie',Age:12,Grade:'A',Average:80},
                    {ID:7,Name:'nandu Bhide',Age:13,Grade:'A',Average:80}];
  }

  ID:0;
  Name:"";
  Average:0;
  Age:0;
  Grade:"";

  public stuList()
{
  return this.studentList;
}

public addStudent(student:Student)
{
  this.studentList.push(student);
}
    
}
