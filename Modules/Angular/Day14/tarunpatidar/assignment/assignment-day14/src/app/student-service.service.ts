import { Injectable } from '@angular/core';
import { Student } from './Istudent';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  public Students:Array<Student> = [
    {id:1,name:"TR",std:10,age:15},
    {id:2,name:"Shivam",std:9,age:13},
    {id:3,name:"Piyush",std:8,age:11},
    {id:4,name:"Rohan",std:7,age:12},
    {id:5,name:"Rohit",std:10,age:14}
  ];


  constructor(private loggerService : LoggerService) { 
    
  }

  getAllStudent(){
    //this.logService.log("Getting All Students");
    return this.Students;
  }

  getStudent(id : number){
    this.loggerService.logger(`Getting Student by id : ${id}`);
    return this.Students.filter(s=>s.id==id);
  }
  addStudent(student : Student){
    this.loggerService.logger(`Adding Student ${student.name}`);
    this.Students.push(student);
  }

  deleteStudent(id : number){
    this.loggerService.logger(`Deleting Students by id : ${id}`);
    let s = this.Students.filter(s=>s.id==id)[0];
    let i = this.Students.indexOf(s);
    this.Students.splice(i,1);
  }
  updateStudent(student : Student){
    this.loggerService.logger(`Update Student ${student.name}`);
    let i = this.Students.indexOf(student);
    this.Students.splice(i,1,student);

  }
}
