import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   pass:string="";
   user:string="";
   message:string="";
   isVisible:boolean=false;
   isError:boolean=true;
  constructor() { }

  ngOnInit(): void {
  }
  change(){
    this.isVisible = !this.isVisible;
  }

  Validate(){
    if(this.user=="Admin"){
      if(this.pass=="Admin"){
        this.message="Login Successfully done";
        this.isError=true;
      }else{
        this.message="Invalid Password";
        this.isError=false;
      }
    }else{
    this.message="Invalid UserName";
    this.isError=false;
    }
  }


}
