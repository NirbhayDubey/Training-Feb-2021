import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JavascriptRoutingModule } from './javascript-routing.module';
import { JavascriptComponent } from './javascript/javascript.component';
import { Day15Component } from './day15/day15.component';
import { Day16Component } from './day16/day16.component';
import { Day17Component } from './day17/day17.component';
import { Day18Component } from './day18/day18.component';
import { Day19Component } from './day19/day19.component';
import { Day20Component } from './day20/day20.component';


@NgModule({
  declarations: [
    JavascriptComponent,
    Day15Component,
    Day16Component,
    Day17Component,
    Day18Component,
    Day19Component,
    Day20Component
  ],
  imports: [
    CommonModule,
    JavascriptRoutingModule
  ]
})
export class JavascriptModule { }
