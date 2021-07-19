import { Component, OnInit } from '@angular/core';
import {QuestionsService} from '../questions.service';
import {Router} from '@angular/router';

import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  serachedQuestions : any;
  allQuestions : any;
  constructor(private fb : FormBuilder,
    private questions: QuestionsService,private route: Router) { }

    searchForm = this.fb.group({
      Que: ['', [Validators.required, Validators.minLength(10)]],
    });
  ngOnInit(): void {
    
    this.questions.getAllQuestions().subscribe(
      res=>{
        this.allQuestions = res;
        console.log(res);
        console.log(this.allQuestions)
      },
      err=>console.log(err)
    )
    //console.log(this.allQuestions);
  }

  askQuestion(){
    this.route.navigate(['ask-question']);
  }
  SearchQuestion(){
    var que = this.searchForm.get('Que')!.value;
    if(que != ''){
      this.questions.searchQuestion(que).subscribe(
        (res : any)=>{
          if(res.length == 0){
            alert("Not Found");
          }
          else{
            this.allQuestions = res; 
          console.log(res)
          }
          
        }
      );
    }else{

      this.questions.getAllQuestions().subscribe(
        res=>{
          this.allQuestions = res;
          console.log(res);
          console.log(this.allQuestions)
        },
        err=>console.log(err)
      )

    }
  }


}
