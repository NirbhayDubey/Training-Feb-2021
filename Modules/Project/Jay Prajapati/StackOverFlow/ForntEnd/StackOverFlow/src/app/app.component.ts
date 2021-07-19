import { Component,OnInit } from '@angular/core';
import {AuthenticationService} from './authentication.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'StackOverFlow';
  public  token : any;
  
  ngOnInit(): void {
    console.log(this.token);
  }
  constructor(private authService : AuthenticationService){}

}
