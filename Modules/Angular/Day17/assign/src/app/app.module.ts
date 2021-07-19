import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HtmlModule} from '../app/html/html.module';
import {CssModule } from '../app/css/css.module';
import {JavascriptModule } from '../app/javascript/javascript.module';



@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HtmlModule,
    CssModule,
    JavascriptModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
