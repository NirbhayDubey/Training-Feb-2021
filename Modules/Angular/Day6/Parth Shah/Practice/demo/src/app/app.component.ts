import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'demo';
  Name  = "Parth";
  Address = 'Dhrangadhra';
    Skills = '.Net and Bootstrap';
    DOB = new Date('1999/9/11');
    btn = 'Check Desktime Report';

    getAge()
    {
      return new Date().getFullYear() - this.DOB.getFullYear()
    }    

    constructor() {}

    ngOnInit() {}
    check()
    {
      console.log('Desktime of ' + this.Name);
    }
 }
