import { Component, OnInit } from '@angular/core';
import { ContentDisplayService } from '../content-display.service';
import { ActivatedRoute } from '@angular/router';
import { Content } from '../content-display';


@Component({
  selector: 'app-content-display',
  templateUrl: './content-display.component.html',
  styleUrls: ['./content-display.component.css']
})


export class ContentDisplayComponent implements OnInit {
  contentId: number = 0;
  contentdetail?: Content;

  constructor(private route: ActivatedRoute
    , private contentDisplayService: ContentDisplayService) { }



  ngOnInit(): void {
    this.contentId = parseInt(this.route.snapshot.paramMap.get('id')!);
    console.log(this.contentId);
    this.contentDisplayService.getContentById(this.contentId).subscribe(
      res => {
        this.contentdetail = res;
        console.log(res);
        console.log(this.contentdetail.url);
      }
    )
  }
}
