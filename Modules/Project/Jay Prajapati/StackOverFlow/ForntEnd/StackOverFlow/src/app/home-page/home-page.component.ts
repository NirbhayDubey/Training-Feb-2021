import { Component, OnInit,Input } from '@angular/core';

import {AuthenticationService} from '../authentication.service';
import { QuestionsService } from '../questions.service';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})


export class HomePageComponent implements OnInit {

  @Input('parentData') public token : any;
  constructor(
    private authService : AuthenticationService,
    private questionService : QuestionsService) { }

  ngOnInit(): void {
  }

  

  
  isUserLoggedIn(){
    //console.log('method is called');
    return this.authService.loggedIn();
  }
  logOutUser(){
    this.authService.logoutUser();
  }
  
  


}

