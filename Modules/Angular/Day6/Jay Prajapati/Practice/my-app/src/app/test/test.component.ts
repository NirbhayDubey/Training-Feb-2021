import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';

@Component({
  selector: 'app-test', // 
  // selector: '.app-test'     --> using as class name
  // selector: '[app-test]'    --> using as Attribute
  templateUrl: './test.component.html', // points to file 
  //template: `` , // --> using line of html (use backticks for multiline html tamplate) 
  styleUrls: ['./test.component.css'] // points 
  // styles: use for inline style 
})
export class TestComponent implements OnInit {

  public name:string = "";
  public url = window.location.href;
  public myId = "testId";
  public isDisabled = false;
  public hasError = true;
  public isSpecial = true;
  public greeting = "Welcome to Learn Angular";
  public messageClasses={
    "text-sucess" : !this.hasError,
    "text-danger" : this.hasError,
    "text-spacial" : this.isSpecial

  }
  
  constructor() { }

  ngOnInit(): void {
  }
  greetUser(){
    return "hello " + this.name;
  }
  onClick(event){
    console.log(event);
    this.greeting = event.type;
  }
  logMessage(value){
    console.log(value);
  }



}
