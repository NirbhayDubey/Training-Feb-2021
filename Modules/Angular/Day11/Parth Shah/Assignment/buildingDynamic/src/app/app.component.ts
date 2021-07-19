import { Component ,ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { QuestionBase } from './Models/question-base';
import {QuestionService} from './services/question-services';
import {DfComponent} from './df/df.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [QuestionService]
})
export class AppComponent {
  title = 'buildingDynamic';
  payload;
  @ViewChild('template') template: DfComponent

  questions$: Observable<QuestionBase<any>[]>;
  questions2$ : Observable<QuestionBase<any>[]>;
  constructor(service : QuestionService){
    this.questions$ = service.getpersonalInfoFields();
    this.questions2$ = service.getEducInfoFields();
  }

  onSubmit(){
     
    this.payload = this.template.payload;
    console.log(this.payload.value);
  }
}
