import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HtmlRoutingModule } from './html-routing.module';
import { HtmlFileComponent } from './html-file/html-file.component';
import { Day1HtmlComponent } from './day1-html/day1-html.component';


@NgModule({
  declarations: [
    HtmlFileComponent,
    Day1HtmlComponent
  ],
  imports: [
    CommonModule,
    HtmlRoutingModule
  ]
})
export class HtmlModule { }
