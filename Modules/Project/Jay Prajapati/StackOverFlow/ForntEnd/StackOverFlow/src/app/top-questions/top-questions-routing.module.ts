import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopQuestionsComponent } from './top-questions.component';

const routes: Routes = [{ path: '', component: TopQuestionsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TopQuestionsRoutingModule { }
