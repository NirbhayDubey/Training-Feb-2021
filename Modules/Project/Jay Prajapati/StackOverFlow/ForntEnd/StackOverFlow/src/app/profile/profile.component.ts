import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentUser : any;
  currentUserId : any;
  constructor(private userService : UsersService,private route : Router) { }

  ngOnInit(): void {
    this.currentUserId = localStorage.getItem('userId');
    this.userService.getCurrentUser().subscribe(
      res=>this.currentUser = res,
      err=>{
        if(err instanceof HttpErrorResponse){
          if(err.status === 401){
            this.route.navigate(['login'])
          }
        }
      }
    )
  }

}
