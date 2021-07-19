import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentFormBuilderComponent } from './student-form-builder/student-form-builder.component';
import { StudentFormComponent } from './student-form/student-form.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentFormBuilderComponent,
    StudentFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule implements OnInit{ 
  constructor(){ }
  ngOnInit(){}

}
