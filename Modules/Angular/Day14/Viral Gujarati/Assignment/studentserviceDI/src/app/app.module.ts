import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentComponent } from './student/student.component';
import { LogService } from './log.service';
import {StudentService } from './student.service'

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ StudentService,LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
