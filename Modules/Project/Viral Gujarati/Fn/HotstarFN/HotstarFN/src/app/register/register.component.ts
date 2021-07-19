import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormControl,FormGroup,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {AuthenticationService} from '../authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup | any ;
  constructor(private _auth : AuthenticationService, private route : Router) { }
 

  ngOnInit(): void {
    this.form = new FormGroup(
      {
        Name:new FormControl('',[Validators.required]),
        Username:new FormControl('',[Validators.required]),
        Email: new FormControl('',[Validators.required,Validators.email]),
        // Phone:new FormControl('',[Validators.required]),
        Password:new FormControl('',[Validators.required]),
        Address:new FormControl('',[Validators.required])
      }
    );
    }
   
    get Name()
    {
      return this.form.get('Name')
     };

     get Username()
    {
      return this.form.get('Username')
     };

     get Email()
     {
       return this.form.get('Email')
      };

      // get Phone()
      // {
      //   return this.form.get('Phone')
      //  };
  
     get Password()
    {
      return this.form.get('Password')
     };

     get Address()
     {
       return this.form.get('Address')
      };

  submit() {
    console.log(this.form.valid)

    if (this.form.valid) {
      this._auth.register(this.form.value).subscribe(res => {
//token storage
        console.log(res)
        localStorage.setItem('token',res.token)
      
        if (res.status == "Success") {

          console.log(res);
          alert(res.message);

          this.route.navigate(['']);

        }
        else {
          alert(res.message);
        }
      });
    }
  }
}

