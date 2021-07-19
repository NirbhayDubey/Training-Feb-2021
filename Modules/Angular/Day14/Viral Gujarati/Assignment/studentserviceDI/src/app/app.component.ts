import { Component } from '@angular/core';
import { student } from './Model/student';
import { StudentService } from './student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'studentserviceDI';

  listData: Array<student> = []; 

  editData: student = {id: 0, name: "", address: ""}; ​

  AddData(arr:StudentService){  ​
    this.listData=arr.getList();  ​
  }  ​

  EditData(student: student){
     this.editData = student;
  }
}