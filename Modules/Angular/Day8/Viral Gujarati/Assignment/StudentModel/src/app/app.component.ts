import { Component, Input } from '@angular/core';
import { Student } from './Models/interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'StudentModel';

  students:Array<Student>=[
    {Id:1, Name:"Viral",Age:21,Average:80,Grade:"A",Active:true},
    {Id:2, Name:"Rahul",Age:22,Average:45,Grade:"C",Active:false},
    {Id:3, Name:"Raj",Age:23,Average:46,Grade:"B",Active:true},
    {Id:4, Name:"Rajvi",Age:24,Average:56,Grade:"B",Active:false},
    {Id:5, Name:"Priya",Age:25,Average:67,Grade:"A",Active:true},
    {Id:6, Name:"Mahesh",Age:23,Average:67,Grade:"B",Active:true},
    {Id:7, Name:"Sagar",Age:23,Average:56,Grade:"B",Active:false},
    {Id:8, Name:"Shivi",Age:23,Average:34,Grade:"C",Active:true},
    {Id:9, Name:"Krishna",Age:25,Average:45,Grade:"C",Active:true},
    {Id:10,Name:"Reena",Age:24,Average:50,Grade:"B",Active:false},
  ];
}
