import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  
  displayName = true;
  color = "";
  colors = ["red","blue","green","yellow"];

  show:boolean = true;
  showorhide(){
    if(this.show == true){
      this.show=false;
    }else{
      this.show=true;
    }

  }
  viewMode = 'map';
  
  
}
