import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users : any;
  constructor(private fb : FormBuilder,private userService : UsersService) { }

  searchForm = this.fb.group({
    User: ['']
  });

  ngOnInit(): void {
    this.userService.getAllUsers()
        .subscribe(
          res=>{
            console.log(res);
            this.users = res;
          })
  }


  searchUser(){
    var user = this.searchForm.get('User')!.value;
    if(user != ''){
      this.userService.searchUser(user).subscribe(
        res=>{
          console.log(res);
          this.users = res;
        }
      )
    }else{
      this.userService.getAllUsers()
        .subscribe(
          res=>{
            console.log(res);
            this.users = res;
          })
    }
  }
}
