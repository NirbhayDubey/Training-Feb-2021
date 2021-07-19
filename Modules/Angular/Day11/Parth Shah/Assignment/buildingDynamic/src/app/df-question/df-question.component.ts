import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionBase } from '../Models/question-base';

@Component({
  selector: 'df-question',
  templateUrl: './df-question.component.html',
  styleUrls: ['./df-question.component.css']
})
export class DfQuestionComponent implements OnInit {

  @Input() question : QuestionBase<string>;
  @Input() form : FormGroup;
  constructor() { }

  ngOnInit(){
  }

  get isValid()
{
return this.form.controls[this.question.key].valid;
}
}
