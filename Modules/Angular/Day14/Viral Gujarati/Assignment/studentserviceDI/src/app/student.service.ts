import { Injectable } from '@angular/core';
import { LogService } from './log.service';
import { student } from './Model/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  studentList: Array<student> = [] ;

  constructor(private logger: LogService) {  }

  getList(){
    this.logger.log('display');
    return this.studentList;
  }

  addData(student: student){
    this.studentList.push(student);
    this.logger.log('add');
  }

  removeData(index: number){
    this.studentList.splice(index, 1);
    this.logger.log('remove');
  }

  // updateData(updatedStudent: student){
  //   var  od = this.studentList.find(x=>x.id==updatedStudent.id);
  //   od.name = updatedStudent.name;
  //   od.address = updatedStudent.address;
  //   this.logger.log('update');

    
  // update(){
  //   var updatedStudent: student  = <student>this.updateform.value;
  //   this.studentService.updateData(updatedStudent);
  //   this.editValue = {id: 0, name: '', address: ''};
  //   console.log("data updated successfully");
 
  }
