import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {
 
  public value1:number=0;
  public value2:number=0;
  public result:number=0;

  add(){

    this.result = +this.value1 + +this.value2;

  }
  sub(){
    this.result = +this.value1 - +this.value2;
  }
  mul(){
    this.result = +this.value1 * +this.value2;
  }
  div(){
    this.result = +this.value1 / +this.value2;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
