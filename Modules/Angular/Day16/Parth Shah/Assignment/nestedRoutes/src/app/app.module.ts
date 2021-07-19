import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HtmlComponent } from './html/html.component';
import { CssComponent } from './css/css.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { Day1htmlComponent } from './day1html/day1html.component';
import { Cssday1Component } from './cssday1/cssday1.component';
import { CssDay2Component } from './css-day2/css-day2.component';
import { CssDay3Component } from './css-day3/css-day3.component';
import { JsDay1Component } from './js-day1/js-day1.component';
import { JsDay2Component } from './js-day2/js-day2.component';
import { JsDay3Component } from './js-day3/js-day3.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HtmlComponent,
    CssComponent,
    JavascriptComponent,
    Day1htmlComponent,
    Cssday1Component,
    CssDay2Component,
    CssDay3Component,
    JsDay1Component,
    JsDay2Component,
    JsDay3Component,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
