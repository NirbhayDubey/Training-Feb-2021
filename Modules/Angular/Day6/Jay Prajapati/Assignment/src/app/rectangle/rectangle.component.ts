import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css']
})
export class RectangleComponent implements OnInit {
  public length:number=0;
  public height:number=0;
  public result:number=0;

  area(){
    this.result = Number((this.height * this.length).toFixed(2));

  }


  constructor() { }

  ngOnInit(): void {
  }

}
