import { Component } from '@angular/core';
import { Student } from './student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practice2';

  
  applyCss="red";

  studentList:Array<Student>=[];
  constructor()
  {
    this.studentList=[{ID:1,name:'Parth',Address:'Dhrangadhra'},
                    {ID:2,name:'Kush',Address:'Surendaranagar'},
                    {ID:3,name:'Jethiya',Address:'Mumbai'}];
  }
  
  ID:0;
  name ="";
    Address:"";

  
edit(item)
{
  this.ID = item.ID;
this.name = item.name;
this.Address = item.Address;
}
  remove(index)
  {
    this.studentList.splice(index,1);
    console.log(this.studentList);
  }

  update()
  {
var item = this.studentList.find(a=>a.ID==this.ID);
item.name = this.name;
item.Address= this.Address;
  }

changeClass(event)
{
if(event.target.value=="1")
{
  this.applyCss="red";
}
else 
{
  this.applyCss="green";
}
}

}
