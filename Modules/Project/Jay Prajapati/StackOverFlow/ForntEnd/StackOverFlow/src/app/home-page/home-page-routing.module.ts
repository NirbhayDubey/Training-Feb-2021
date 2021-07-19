import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuesionAnswerDetailComponent } from '../quesion-answer-detail/quesion-answer-detail.component';
import { HomePageComponent } from './home-page.component';

const routes: Routes = [{ path: '', component: HomePageComponent,
children : [
  { path: '', loadChildren: () => import('../top-questions/top-questions.module').then(m => m.TopQuestionsModule) },
  { path: 'questions', loadChildren: () => import('../questions/questions.module').then(m => m.QuestionsModule) }, 
  {path : 'questions/:id', component : QuesionAnswerDetailComponent},
  { path: 'tags', loadChildren: () => import('../tags/tags.module').then(m => m.TagsModule) }, 
  { path: 'users', loadChildren: () => import('../users/users.module').then(m => m.UsersModule)},
  { path: 'profile', loadChildren: () => import('../profile/profile.module').then(m => m.ProfileModule) },
  { path: 'home', loadChildren: () => import('../top-questions/top-questions.module').then(m => m.TopQuestionsModule) },
  { path: 'users/:userId', loadChildren: () => import('../user-details/user-details.module').then(m => m.UserDetailsModule) },
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
