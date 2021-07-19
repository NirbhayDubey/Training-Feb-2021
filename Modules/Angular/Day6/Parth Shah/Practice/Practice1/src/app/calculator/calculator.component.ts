import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  public num1: number;
  public num2: number;
  public ans : number;

  add(){
    this.ans = this.num1 + this.num2;

  }

  sub(){
    if(this.num2 > this.num1)
    {
      alert("Make your first number bigger Please!")
    }
    else
    {
      this.ans = this.num1 - this.num2;
    }

  }
  mul(){
    this.ans = this.num1 * this.num2;

  }

  constructor() { }

  ngOnInit(): void {
  }

}
