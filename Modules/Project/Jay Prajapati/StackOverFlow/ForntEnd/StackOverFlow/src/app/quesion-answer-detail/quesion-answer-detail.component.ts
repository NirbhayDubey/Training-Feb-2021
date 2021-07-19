import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { QuestionsService } from '../questions.service';
import { UsersService } from '../users.service';
@Component({
  selector: 'app-quesion-answer-detail',
  templateUrl: './quesion-answer-detail.component.html',
  styleUrls: ['./quesion-answer-detail.component.css']
})
export class QuesionAnswerDetailComponent implements OnInit {

  userId: any;
  queId: any;
  queAnsDetails: any = {};
  constructor(private fb: FormBuilder,
    private questions: QuestionsService,
    private route: ActivatedRoute,
    private authService: AuthenticationService,
    private userService: UsersService,
    private router: Router) { }


  answerForm = this.fb.group({
    Answer1: ['', [Validators.required, Validators.minLength(10)]],

  });

  ngOnInit(): void {
    this.userId = localStorage.getItem('userId');

    this.queId = parseInt(this.route.snapshot.paramMap.get('id')!);

    console.log(this.queId + 'Question');
    this.questions.getQuestion(this.queId).subscribe(
      res => { this.queAnsDetails = res; console.log(res) },
      err => console.log(err)
    )
  }

  get answer() {
    return this.answerForm.get('Answer1')!;
  }

  submit() {
    if (!this.authService.loggedIn()) {
      this.router.navigate(['/login']);
    } else {
      this.userService.postAnswer(this.userId, this.queId, this.answerForm.value).subscribe(
        res => {
          location.reload();
          console.log(res)
        },
        err => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
              this.router.navigate(['login'])
            }
          }
        }
      );
    }
  }
  UpVoteQuestion() {
    if(this.authService.loggedIn()){
      this.userService.giveUpVoteToQuestion(this.userId, this.queId).subscribe(
        (res: any) => {
          if (res.status == "Fail") {
            alert(res.message);
          } else {
            location.reload();
            console.log(res)
          }
        }
      )
    }else{
      this.router.navigate(['login']);
    }
    
  }

  DownVoteQuestion() {
    if(this.authService.loggedIn()){
      this.userService.giveDownVoteToQuestion(this.userId, this.queId).subscribe(
        (res: any) => {
          if (res.status == "Fail") {
            alert(res.message);
          }
          else {
            location.reload();
            console.log(res.message);
          }
        }
      )
    }else{
      this.router.navigate(['login']);
    }
   
  }

  BookmarkQuestion() {
    if(this.authService.loggedIn()){
      this.userService.bookmarkQuestion(this.userId, this.queId).subscribe(
        (res: any) => {
          if (res.status == "Fail") {
            alert(res.message);
          } else {
            location.reload();
            console.log(res)
          }
        }
      )
    }else{
      this.router.navigate(['login']);
    }
  
  }


  UpVoteAnswer(ansId: number) {
    if(this.authService.loggedIn()){
      this.userService.giveUpVoteToAnswer(this.userId, this.queId, ansId).subscribe(
        (res: any) => {
          if (res.status == "Fail") {
            alert(res.message);
          } else {
            location.reload();
            console.log(res)
          }
        }
      )
    }else{
      this.router.navigate(['login']);
    }
  
  }

  DownVoteAnswer(ansId: number) {
    if(this.authService.loggedIn()){
      this.userService.giveDownVoteToAnswer(this.userId, this.queId, ansId).subscribe(
        (res: any) => {
          if (res.status == "Fail") {
            alert(res.message);
          } else {
            location.reload();
            console.log(res)
          }
        }
      )
    }else{
      this.router.navigate(['login']);
    }
    

  }






}
