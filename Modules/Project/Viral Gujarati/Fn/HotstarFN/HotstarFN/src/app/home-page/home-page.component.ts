import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Subscribe } from '../subscribe';
import { Subscriber } from 'rxjs';
import { SubscribeService } from '../subscribe.service';
import { AuthenticationService } from '../authentication.service';



@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
//decaring variable 
  Subscribe: Subscribe[] = [];


  constructor(private route: Router,
    private subscribe: SubscribeService,
    private authservice: AuthenticationService
  ) {
  }

  ngOnInit(): void {

    this.subscribe.getAll().subscribe((data: Subscribe[]) => {
      console.log(data);
      this.Subscribe = data;
    })
  }

  login() {
    this.route.navigate(['login']);
  }

  register() {
    this.route.navigate(['register']);
  }


  IsLoggedIn(){
    return !!localStorage.getItem('token')

  }

  logout(){
    localStorage.clear()
    this.route.navigate(['/']);
  }
}
