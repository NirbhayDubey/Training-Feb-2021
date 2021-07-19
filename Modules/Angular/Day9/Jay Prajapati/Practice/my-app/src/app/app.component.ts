import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormArray, Form} from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'my-app';
  registrationForm = new FormGroup({
    userName : new FormControl('Jay'),
    password : new FormControl(''),
    confirmPassword : new FormControl(''),
    address : new FormGroup({
      city : new FormControl(''),
      state : new FormControl(''),
      postalCode : new FormControl('')
    })
  });
  

  constructor(){
    
  }

  LoadAPIData(){
    this.registrationForm.setValue({
      userName : "Jay",
    password : "Admin",
    confirmPassword : "Admin",
    address : {
      city : "Vijapur",
      state : "Gujarat",
      postalCode : "382870"
    }
  })
  }

  LoadSomeAPIData(){
    this.registrationForm.patchValue({
      userName : "Jay",
    password : "Admin",
    confirmPassword : "Admin"
    
  })
  }

  

  
ngOnInit(){}


  
}
