import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-css',
  templateUrl: './css.component.html',
  styleUrls: ['./css.component.css']
})
export class CssComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  showday2Css(){
    this.router.navigate(['Day1Css'], { relativeTo: this.route });
  }
  showday3Css(){
    this.router.navigate(['Day2Css'], { relativeTo: this.route });
  }
  showday4Css(){
    this.router.navigate(['Day3Css'], { relativeTo: this.route });
  }
}
