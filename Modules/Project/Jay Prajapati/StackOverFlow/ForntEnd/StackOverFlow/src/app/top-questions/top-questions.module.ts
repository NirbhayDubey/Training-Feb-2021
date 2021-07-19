import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopQuestionsRoutingModule } from './top-questions-routing.module';
import { TopQuestionsComponent } from './top-questions.component';


@NgModule({
  declarations: [
    TopQuestionsComponent
  ],
  imports: [
    CommonModule,
    TopQuestionsRoutingModule
  ]
})
export class TopQuestionsModule { }
