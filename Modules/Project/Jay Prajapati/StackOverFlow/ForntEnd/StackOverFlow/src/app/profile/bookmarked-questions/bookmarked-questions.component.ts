import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-bookmarked-questions',
  templateUrl: './bookmarked-questions.component.html',
  styleUrls: ['./bookmarked-questions.component.css']
})
export class BookmarkedQuestionsComponent implements OnInit {

  userId : any;
  bookmarkedQuestions : any;
  constructor(private userService : UsersService) { }

  ngOnInit(): void {
    this.userId = localStorage.getItem('userId');
    this.userService.getBookmarked(this.userId).subscribe(
      res=>{
        console.log(res);
        this.bookmarkedQuestions = res;
      }
    )
  }

}
