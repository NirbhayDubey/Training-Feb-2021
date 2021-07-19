import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  currentUserId : any;
  user : any;
  constructor(private userService : UsersService,private route : Router) { }

  ngOnInit(): void {
    this.currentUserId = localStorage.getItem('userId');
    this.userService.getCurrentUser().subscribe(
      res=>this.user = res,
      err =>{
        if(err instanceof HttpErrorResponse){
          if(err.status === 401){
            this.route.navigate(['login']);
          }
        }
      }
    )
  }

}
