import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  form: FormGroup | any;

  constructor(private authService: AuthenticationService,
    private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup(
      {
        Username: new FormControl('', [Validators.required]),
        Password: new FormControl('', [Validators.required])
      }
    );
  }

  get Username() {
    return this.form.get('Username')
  };

  get Password() {
    return this.form.get('Password')
  };


  loginProcess() {

    if (this.form.valid) {
      this.authService.login(this.form.value).subscribe(res => {

        if (res.token != undefined) {
debugger
          localStorage.setItem('token', res.token);
          localStorage.setItem('userId', res.userId);

          this.router.navigate(['/home']);
          alert(res.message);
        }
        else {
          alert(res.message);
        }
      });
    }
  }

  navigateTohome() {
    this.router.navigate(['']);

  }
}


