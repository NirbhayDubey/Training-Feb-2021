import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JsDay1Component } from './js-day1/js-day1.component';
import { JsDay2Component } from './js-day2/js-day2.component';
import { JsDay3Component } from './js-day3/js-day3.component';
import { JsFileComponent } from './js-file/js-file.component';

const routes: Routes = [
  { path: 'jsHome', component: JsFileComponent,
  children:[
    { path: 'Day12Js', component: JsDay1Component},
    { path: 'Day13Js', component: JsDay2Component},
    { path: 'Day14Js', component: JsDay3Component},

  ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JsRoutingModule { }
