import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HtmlRoutingModule } from './html-routing.module';
import { HtmlComponent } from './html/html.component';
import { Day3Component } from './day3/day3.component';


@NgModule({
  declarations: [
    HtmlComponent,
    Day3Component
  ],
  imports: [
    CommonModule,
    HtmlRoutingModule
  ]
})
export class HtmlModule { }
