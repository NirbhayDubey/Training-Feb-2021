import { QuestionBase } from '../Models/question-base';

export class TextboxQuestion extends QuestionBase<string> {
  controlType = 'textbox';
}