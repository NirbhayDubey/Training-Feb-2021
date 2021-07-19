import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdmissionComponent } from './admission/admission.component';
// import { StudentComponent } from './student/student.component';
import { StudentFormBuilderComponent } from './student-form-builder/student-form-builder.component';

@NgModule({
  declarations: [
    AppComponent,
    AdmissionComponent,
    // StudentComponent,
    StudentFormBuilderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
