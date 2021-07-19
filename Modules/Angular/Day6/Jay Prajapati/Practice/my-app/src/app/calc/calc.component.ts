import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {
  
  value1:number;
  value2:number;
  result:number;

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
  mod(){
    this.result = +this.value1 % +this.value2;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
