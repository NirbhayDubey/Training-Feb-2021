import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public fname : string;
  public pwd : string;


  login(){
    if(this.fname == "admin" && this.pwd == "admin")
    {
      alert("You are successfully login!")
    }
    else {
      alert("Please check your email or password")
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
