import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators,FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { QuestionsService } from '../questions.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-ask-question',
  templateUrl: './ask-question.component.html',
  styleUrls: ['./ask-question.component.css']
})
export class AskQuestionComponent implements OnInit {

  //questionForm!:FormGroup;
  currentUser : any;
  userId? : any;
  constructor(private fb : FormBuilder, private questions : QuestionsService,private user : UsersService,private route : Router) { }

  ngOnInit(): void {
    this.userId = localStorage.getItem('userId');
    //console.log(this.userId);
    
  }
  questionForm = this.fb.group({
    Question1 : ['',[Validators.required]],
    QuestionBody : ['',Validators.required],
    Tags: this.fb.array([
      this.fb.group({
        TagName : ['',[Validators.required]]
      })
    ]),
  });

  get question1(){
    return this.questionForm.get('Question1')!;
  }
  get questionBody(){
    return this.questionForm.get('QuestionBody')!;
  }
  get getTagList(){
    return this.questionForm.get('Tags') as FormArray;
  }


  AddList(){
    this.getTagList.push(this.fb.group({
      TagName : ['']
    }));
  }

  submit(){
    console.log(this.questionForm.value);
    
    this.user.postQuestion(this.userId,this.questionForm.value).subscribe(
      res=>{
        alert("Question Post Successfully");
        this.route.navigate(['']);
        console.log(res);
        
      },
      err=>{
        if(err instanceof HttpErrorResponse){
          if(err.status === 401){
            this.route.navigate(['login'])
          }
        }
      }
    );
  }



}
