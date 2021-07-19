import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CssComponent } from './css/css.component';
import { HtmlComponent } from './html/html.component';
import { JacascriptComponent } from './jacascript/jacascript.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Day3Component } from './day3/day3.component';
import { Day4Component } from './day4/day4.component';
import { Day5Component } from './day5/day5.component';
import { Day6Component } from './day6/day6.component';
import { Day7Component } from './day7/day7.component';
import { Day8Component } from './day8/day8.component';
import { Day15Component } from './day15/day15.component';
import { Day16Component } from './day16/day16.component';
import { Day17Component } from './day17/day17.component';
import { Day18Component } from './day18/day18.component';
import { Day19Component } from './day19/day19.component';
import { Day20Component } from './day20/day20.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { D3AssignComponent } from './d3-assign/d3-assign.component';
import { D3PracComponent } from './d3-prac/d3-prac.component';

@NgModule({
  declarations: [
    AppComponent,
    CssComponent,
    HtmlComponent,
    JacascriptComponent,
    NavbarComponent,
    Day3Component,
    Day4Component,
    Day5Component,
    Day6Component,
    Day7Component,
    Day8Component,
    Day15Component,
    Day16Component,
    Day17Component,
    Day18Component,
    Day19Component,
    Day20Component,
    PageNotFoundComponent,
    D3AssignComponent,
    D3PracComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
