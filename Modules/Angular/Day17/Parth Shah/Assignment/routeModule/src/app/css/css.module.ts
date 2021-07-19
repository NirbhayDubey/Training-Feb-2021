import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CssRoutingModule } from './css-routing.module';
import { CssfileComponent } from './cssfile/cssfile.component';
import { Day2CssComponent } from './day2-css/day2-css.component';
import { Day3CssComponent } from './day3-css/day3-css.component';
import { Day4CssComponent } from './day4-css/day4-css.component';


@NgModule({
  declarations: [
    CssfileComponent,
    Day2CssComponent,
    Day3CssComponent,
    Day4CssComponent
  ],
  imports: [
    CommonModule,
    CssRoutingModule
  ]
})
export class CssModule { }
