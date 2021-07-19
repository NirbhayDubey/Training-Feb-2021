import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  //data getting from parent component to child component
  
  @Input('parentData') public  name: string = "";
  //@Input() public  parentData: string = "";


  @Output() public childEvent = new EventEmitter();

  @Output() public childData = new EventEmitter();

  
  constructor() { }

  ngOnInit(): void {
  }

  fireEvent(){
    this.childEvent.emit("Hey Jay Prajapati");
  }
  sendToSibling(){
    this.childData.emit("I am coming form child 1");
  }

}
