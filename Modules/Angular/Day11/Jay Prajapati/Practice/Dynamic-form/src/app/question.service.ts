import { Injectable } from '@angular/core';
import { QuestionBase } from './question-base';
import {QuestionDropdown} from './question-dropdown';
import {QuestionTextbox} from './question-textbox';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor() { }

  getQuestions(){
    const questions : QuestionBase<string>[] = [
      new QuestionDropdown({
        key : 'brave',
        label : 'Bravery Rating',
        options : [
          {key: 'solid', value : 'Solid'},
          {key: 'great', value : 'Great'},
          {key: 'good', value : 'Solid'},
          {key: 'unproven', value : 'Unproven'}
        ],
        order : 3
      }),
      new QuestionTextbox({
        key:'firstName',
        label:'First name',
        value: 'Bombasto',
        required: true,
        order: 1
      }),

      new QuestionTextbox({
        key:'emailAddress',
        label:'Email',
        type:'email',
        order:2
      })
    ];

    return of(questions.sort((a,b) => a.order - b.order));
  }
}
