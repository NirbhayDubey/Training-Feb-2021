import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule ,FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DfComponent } from './df/df.component';
import { DfQuestionComponent } from './df-question/df-question.component';
import { CommonModule } from '@angular/common';  


@NgModule({
  declarations: [
    AppComponent,
    DfComponent,
    DfQuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule ,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas : [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
