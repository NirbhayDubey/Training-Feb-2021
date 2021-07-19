import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AskQuestionComponent } from './ask-question/ask-question.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { QuesionAnswerDetailComponent } from './quesion-answer-detail/quesion-answer-detail.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./home-page/home-page.module').then(m => m.HomePageModule) },
  { path: 'home-page', loadChildren: () => import('./home-page/home-page.module').then(m => m.HomePageModule) },
  {path : 'login', component : LoginComponent},
  {path : 'register', component : RegisterComponent},
  {
    path : 'ask-question', 
    component : AskQuestionComponent,
    canActivate : [AuthGuard]
  },
  
  {path : "**", component : PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
