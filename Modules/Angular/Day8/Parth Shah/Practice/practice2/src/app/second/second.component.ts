import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  error=true;
  name:"";

  validate()
  {
    if(this.name=="")
    {
      this.error=true;
    }
    else
    {
      this.error=false;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
