import { Component, OnInit , Input } from '@angular/core';
import { QuestionBase } from '../Models/question-base';
import{FormGroup} from '@angular/forms'
import { QuestionControlService } from '../services/question-control.service';
@Component({
  selector: 'df',
  templateUrl: './df.component.html',
  styleUrls: ['./df.component.css'],
  providers :[QuestionControlService]
})
export class DfComponent implements OnInit {

  @Input() questions: QuestionBase<string>[] = [];

  form : FormGroup;
  payload: string = '';
  constructor(private controlService : QuestionControlService) {}

  ngOnInit() {
    this.form = this.controlService.toFormGroup(this.questions);
  }
  // to get form's value
  onSubmit(){
    this.payload = this.form.value;
  }

}
