import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { student } from '../Model/student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  @Output() userData = new EventEmitter(); 
  
  @Input() editValue: student = {id: 0, name: '', address: ''}; ​

  student: student = {id: 0, name: '', address: ''};

    @ViewChild('updateForm') updateform:NgForm | any ;

  list: Array<student> = [];

  constructor(private studentService: StudentService) { 
  }

  submit(){
    this.studentService.addData(this.student);
    console.log("data added successfully!");
    this.student = {id: 0, name: '', address: ''};
    this.userData.emit(this.studentService);
  }

  // update(){
  //   var updatedStudent: student = <student>this.updateform.value;
  //   this.studentService.updateData(updatedStudent);
  //   this.editValue = {id: 0, name: '', address: ''};
  //   console.log("data updated successfully");
  

  ngOnInit(): void {
  }
}