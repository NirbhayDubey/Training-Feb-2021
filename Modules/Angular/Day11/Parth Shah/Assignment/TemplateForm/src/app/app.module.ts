import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TempFormComponent } from './temp-form/temp-form.component';
import { LeftComponent } from './left/left.component';

@NgModule({
  declarations: [
    AppComponent,
    TempFormComponent,
    LeftComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
