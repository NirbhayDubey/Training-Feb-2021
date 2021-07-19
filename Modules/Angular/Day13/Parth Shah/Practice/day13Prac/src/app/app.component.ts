import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'day13Prac';
  listData :Array<any>=[];  
   AddData(arr:Array<any>){  
      this.listData=arr; 
}
}
