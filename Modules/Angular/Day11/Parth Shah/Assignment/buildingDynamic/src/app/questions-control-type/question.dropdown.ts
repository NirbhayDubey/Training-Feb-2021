import { QuestionBase } from '../Models/question-base';

export class DropdownQuestion  extends QuestionBase<string> {
  controlType = 'dropdown';
}