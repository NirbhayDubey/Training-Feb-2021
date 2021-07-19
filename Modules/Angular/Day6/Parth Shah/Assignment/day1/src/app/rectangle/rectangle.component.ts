import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css']
})
export class RectangleComponent implements OnInit {
public l : number;
public b : number;
public ans : number;

mul(){
  this.ans = this.l * this.b ;
}

  constructor() { }

  ngOnInit(): void {
  }

}
