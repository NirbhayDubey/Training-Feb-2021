import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Output() userData = new EventEmitter();  
  Id:0;
  Name:"";
   listUser:Array<any>=[];  

    AddMessage(){  
      var obj = {Id:this.Id,Name:this.Name}
   this.listUser.push(obj);
this.userData.emit(this.listUser);
    }
    
//     RemoveMessage(userName:HTMLInputElement)  
//    {  
//       this.listUser.splice({ID:this.Id,Name:this.Name}); 
//    }   
  constructor() { }

  ngOnInit(): void {
  }

}
