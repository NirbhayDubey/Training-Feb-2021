import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.css']
})
export class JavascriptComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  showday12Js(){
    this.router.navigate(['Day1Js'], { relativeTo: this.route });
  }
  showday13Js(){
    this.router.navigate(['Day2Js'], { relativeTo: this.route });
  }
  showday14Js(){
    this.router.navigate(['Day3Js'], { relativeTo: this.route });
  }
}
