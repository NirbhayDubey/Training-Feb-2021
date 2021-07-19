import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Practice1';

  constructor() { }

  ngOnInit(): void {
  }

  showAlert(){
    alert("Ohk you are now shows usage of alert!")
  }

}


