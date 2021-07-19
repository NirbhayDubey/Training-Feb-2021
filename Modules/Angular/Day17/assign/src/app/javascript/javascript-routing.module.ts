import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { JavascriptComponent } from './javascript/javascript.component';
import { Day15Component } from './day15/day15.component';
import { Day16Component } from './day16/day16.component';
import { Day17Component } from './day17/day17.component';
import { Day18Component } from './day18/day18.component';
import { Day19Component } from './day19/day19.component';
import { Day20Component } from './day20/day20.component';


const routes: Routes = [{path:'javascript',component:JavascriptComponent,
children:[
  {path:'day15',component:Day15Component},
  {path:'day16',component:Day16Component},
  {path:'day17',component:Day17Component},
  {path:'day18',component:Day18Component},
  {path:'day19',component:Day19Component},
  {path:'day20',component:Day20Component}
]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JavascriptRoutingModule { }
