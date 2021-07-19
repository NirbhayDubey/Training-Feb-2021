import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public fname: string = "";      
  public lname: string="";
  public add: string="";
  public   pan: string="";
  

  constructor() { }

  ngOnInit(): void {
  }

}
