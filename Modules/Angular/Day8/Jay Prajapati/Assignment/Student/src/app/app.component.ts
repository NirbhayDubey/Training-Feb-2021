import { preserveWhitespacesDefault } from '@angular/compiler';
import { Component,Input } from '@angular/core';
import {Student} from './interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {

  students:Array<Student>=[
    {Id:1,Name:"Ramesh Patel",Age:22,Average:85,Grade:"A",Active:true},
    {Id:2,Name:"Adam Smith",Age:25,Average:30,Grade:"C",Active:true},
    {Id:3,Name:"John Doe",Age:21,Average:75,Grade:"A",Active:true},
    {Id:4,Name:"Kapil Sharma",Age:29,Average:90,Grade:"A",Active:false},
    {Id:5,Name:"Neha Sharma",Age:25,Average:60,Grade:"B",Active:true},
    {Id:6,Name:"Mehesh Sharma",Age:22,Average:25,Grade:"C",Active:true},
    {Id:7,Name:"Nisha Sharma",Age:21,Average:50,Grade:"B",Active:false},
  ];
  title = 'Student';
  




  

  
}
