import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  public pass:string = '';
  public isVisible:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  change(){
    this.isVisible = (!this.isVisible);
  }

}
