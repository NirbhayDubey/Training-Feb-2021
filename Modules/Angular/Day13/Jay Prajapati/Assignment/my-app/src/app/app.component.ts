import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormArray, Form} from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { Student } from './Model/interface';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'StudentAdmission';
 
  public List : Array<Student> = [];
  showStudentList(){
    console.log(this.List);
  }
  

 
ngOnInit(){}



}
