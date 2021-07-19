import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  userId : any;
  user : any;
  constructor(private route : ActivatedRoute,
    private userService : UsersService) { }

  ngOnInit(): void {
    this.userId = parseInt(this.route.snapshot.paramMap.get('userId')!);
    this.userService.getUserById(this.userId).subscribe(
      res=>{
        console.log(res);
        this.user = res;
      }
    )
  }

}
