import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  constructor(private userService : UsersService) { }
tags : any;
  ngOnInit(): void {
    this.userService.getAllTags().subscribe(
      res=>{
        console.log(res);
        this.tags = res
      },
      err=>console.log(err)
    )

  }

}
