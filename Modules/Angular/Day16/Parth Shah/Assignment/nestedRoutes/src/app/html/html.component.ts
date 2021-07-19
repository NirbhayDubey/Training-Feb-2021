import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-html',
  templateUrl: './html.component.html',
  styleUrls: ['./html.component.css']
})
export class HtmlComponent implements OnInit {

  public htmlId;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }


  showday1Html(){
    this.router.navigate(['Day1html'], { relativeTo: this.route });
  }
}
