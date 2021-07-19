import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HtmlWorkComponent } from './html-work/html-work.component';
import { CssWorkComponent } from './css-work/css-work.component';
import { JavascriptWorkComponent } from './javascript-work/javascript-work.component';
import { Day1HtmlComponent } from './day1-html/day1-html.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Day1CssComponent } from './day1-css/day1-css.component';
import { Day3CssComponent } from './day3-css/day3-css.component';
import { Day2CssComponent } from './day2-css/day2-css.component';
import { JsFile1Component } from './js-file1/js-file1.component';
import { JsFile2Component } from './js-file2/js-file2.component';
import { JsFile3Component } from './js-file3/js-file3.component';

@NgModule({
  declarations: [
    AppComponent,
    HtmlWorkComponent,
    CssWorkComponent,
    JavascriptWorkComponent,
    Day1HtmlComponent,
    PageNotFoundComponent,
    Day1CssComponent,
    Day3CssComponent,
    Day2CssComponent,
    routingComponents,
    JsFile1Component,
    JsFile2Component,
    JsFile3Component
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
