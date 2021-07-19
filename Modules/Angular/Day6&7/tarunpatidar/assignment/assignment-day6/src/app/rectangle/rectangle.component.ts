import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css']
})
export class RectangleComponent implements OnInit {

  length:number=0;
  width:number=0;
  result:number=0;
  constructor() { }

  ngOnInit(): void {
  }

  
  area(){
    this.result = 2*(this.length * this.width), this.length,this.width;  
  }

}
