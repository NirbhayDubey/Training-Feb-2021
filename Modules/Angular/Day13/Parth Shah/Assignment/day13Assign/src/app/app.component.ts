import { Component } from '@angular/core';
import { Student } from './student/interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'day13Assign';
  listData :Array<Student>=[];  
     AddData(arr:Array<Student>){  
        this.listData=arr; 
  }


}
