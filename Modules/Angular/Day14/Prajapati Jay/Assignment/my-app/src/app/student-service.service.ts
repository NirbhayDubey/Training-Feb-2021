import { Injectable } from '@angular/core';
import {Student} from './Interface';
import {LogService} from './log.service';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  public Students:Array<Student> = [
    {id:1,name:"Jay",std:10,age:15},
    {id:2,name:"Adam",std:9,age:13},
    {id:3,name:"John",std:8,age:11},
    {id:4,name:"Smith",std:7,age:12},
    {id:5,name:"Mahesh",std:10,age:14}
  ];


  constructor(private logService : LogService) { 
    
  }

  getAllStudent(){
    //this.logService.log("Getting All Students");
    return this.Students;
  }

  getStudent(id : number){
    this.logService.log(`Getting Student by id : ${id}`);
    return this.Students.filter(s=>s.id==id);
  }
  addStudent(student : Student){
    this.logService.log(`Adding Student ${student.name}`);
    this.Students.push(student);
  }

  deleteStudent(id : number){
    this.logService.log(`Deleting Students by id : ${id}`);
    let s = this.Students.filter(s=>s.id==id)[0];
    let i = this.Students.indexOf(s);
    this.Students.splice(i,1);
  }
  updateStudent(student : Student){
    this.logService.log(`Update Student ${student.name}`);
    let i = this.Students.indexOf(student);
    this.Students.splice(i,1,student);

  }


  
}
