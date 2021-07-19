import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent implements OnInit {

  public r : number;
  public pi : number;
  an : number;

  cir()
  {
    this.an = this.pi=3.14 * this.r * this.r;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
