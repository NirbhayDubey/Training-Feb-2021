
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { student } from '../Model/student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  @Input() listValue: Array<student> = []; 

  @Output() editData = new EventEmitter(); 

  list: Array<student> = [];

  remove(id: number){
    this.studentService.removeData(id);
    console.log("data removed successfully!");
  }

  edit(student: student){
    this.editData.emit(student); 
    console.log("edit data displayed successfully!");
  }

  constructor(private studentService: StudentService) { 
  }

  ngOnInit(): void {
  }

}