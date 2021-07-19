import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public UserName:string="";  
  public password:string="";  
  public message: string="";
  public isError: boolean | undefined;

  
  constructor() { }

  ngOnInit(): void {
  }

 isval(){   
  if(this.UserName=="Admin")
  {       
    this.message="Login Successfully done";
    this.isError=true;   
  }
  else{ 

    this.message="Invalid Password";  
    this.isError=false; 
  }
 }

}
