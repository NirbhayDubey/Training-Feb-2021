import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'user-list',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
   @Input() listValue = [];  

  constructor() { }

  ngOnInit(): void {
  }

}
