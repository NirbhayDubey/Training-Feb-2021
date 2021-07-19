import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-temp-form',
  templateUrl: './temp-form.component.html',
  styleUrls: ['./temp-form.component.css']
})
export class TempFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  registerUser(registerForm:NgForm):void{
    console.log(registerForm.value);
   

  }
}


