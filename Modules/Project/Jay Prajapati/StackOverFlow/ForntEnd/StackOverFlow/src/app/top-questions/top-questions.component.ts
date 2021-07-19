import { Component, OnInit } from '@angular/core';
import {QuestionsService} from '../questions.service';
import {Router} from '@angular/router';
import { UsersService } from '../users.service';
@Component({
  selector: 'app-top-questions',
  templateUrl: './top-questions.component.html',
  styleUrls: ['./top-questions.component.css']
})
export class TopQuestionsComponent implements OnInit {

  currentUser : any;
  constructor(private questions: QuestionsService,private route : Router, private user : UsersService) { }
  topQuestions : any = [];
  ngOnInit(): void {

    this.questions.getTopQuestions().subscribe(
      res=>{this.topQuestions = res;console.log(res);console.log(this.topQuestions)},
      err=>console.log(err)
    )
    console.log(this.topQuestions);
  }

  
  askQuestion(){
    // this.user.getCurrentUser().subscribe(
    //   res => {this.currentUser==res;console.log(res)},
    //   err => console.log(err)
    // );
    this.route.navigate(['ask-question']);
  }

}
