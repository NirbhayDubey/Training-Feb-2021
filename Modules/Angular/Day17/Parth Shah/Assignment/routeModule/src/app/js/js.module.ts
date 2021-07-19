import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JsRoutingModule } from './js-routing.module';
import { JsDay1Component } from './js-day1/js-day1.component';
import { JsDay2Component } from './js-day2/js-day2.component';
import { JsDay3Component } from './js-day3/js-day3.component';
import { JsFileComponent } from './js-file/js-file.component';


@NgModule({
  declarations: [
    JsDay1Component,
    JsDay2Component,
    JsDay3Component,
    JsFileComponent
  ],
  imports: [
    CommonModule,
    JsRoutingModule
  ]
})
export class JsModule { }
