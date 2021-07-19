import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
@Component({
  selector: 'app-html-work',
  templateUrl: './html-work.component.html',
  styleUrls: ['./html-work.component.css']
})
export class HtmlWorkComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }
  public htmlId;
  ngOnInit() {
    //let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.htmlId = id;

    });
  }
  showDay1Html(){
    this.router.navigate(['day1Html'], { relativeTo: this.route });
  }
}
