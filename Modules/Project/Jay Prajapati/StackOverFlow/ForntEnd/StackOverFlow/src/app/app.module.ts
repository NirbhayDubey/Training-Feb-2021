import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TopQuestionsModule} from './top-questions/top-questions.module';
import { QuestionsModule } from './questions/questions.module';
import { TagsModule } from './tags/tags.module';
import { UsersModule } from './users/users.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { QuesionAnswerDetailComponent } from './quesion-answer-detail/quesion-answer-detail.component';
import { AskQuestionComponent } from './ask-question/ask-question.component';
import { AuthGuard } from './auth.guard';
import {TokenInterceptorService} from './token-interceptor.service';
import { AuthenticationService } from './authentication.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent,
    QuesionAnswerDetailComponent,
    AskQuestionComponent,
    
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    QuestionsModule,
    TopQuestionsModule,    
    TagsModule,
    UsersModule
  ],
  providers: [AuthGuard,AuthenticationService,
  {
    provide : HTTP_INTERCEPTORS,
    useClass : TokenInterceptorService,
    multi : true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
