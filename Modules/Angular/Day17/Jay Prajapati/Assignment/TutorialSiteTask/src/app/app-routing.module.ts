import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Day15Assignemnt1Component } from './day15-assignemnt1/day15-assignemnt1.component';
import { Day15Practice1Component } from './day15-practice1/day15-practice1.component';
import { Day15Practice2Component } from './day15-practice2/day15-practice2.component';
import { Day15Component } from './day15/day15.component';
import { Day16Assignemnt1Component } from './day16-assignemnt1/day16-assignemnt1.component';
import { Day16Practice1Component } from './day16-practice1/day16-practice1.component';
import { Day16Practice2Component } from './day16-practice2/day16-practice2.component';
import { Day16Practice3Component } from './day16-practice3/day16-practice3.component';
import { Day16Component } from './day16/day16.component';
import { Day17Assignemnt1Component } from './day17-assignemnt1/day17-assignemnt1.component';
import { Day17Component } from './day17/day17.component';
import { Day18Component } from './day18/day18.component';
import { Day19Practice1Component } from './day19-practice1/day19-practice1.component';
import { Day19Practice2Component } from './day19-practice2/day19-practice2.component';
import { Day19Practice3Component } from './day19-practice3/day19-practice3.component';
import { Day19Component } from './day19/day19.component';
import { Day20Assignemnt1Component } from './day20-assignemnt1/day20-assignemnt1.component';
import { Day20Component } from './day20/day20.component';
import { Day3Assignemnt1Component } from './day3-assignemnt1/day3-assignemnt1.component';
import { Day3Practice1Component } from './day3-practice1/day3-practice1.component';
import { Day3Practice2Component } from './day3-practice2/day3-practice2.component';
import { Day3Component } from './day3/day3.component';
import { Day4Assignemnt1Component } from './day4-assignemnt1/day4-assignemnt1.component';
import { Day4Practice1Component } from './day4-practice1/day4-practice1.component';
import { Day4Practice2Component } from './day4-practice2/day4-practice2.component';
import { Day4Practice3Component } from './day4-practice3/day4-practice3.component';
import { Day4Component } from './day4/day4.component';
import { Day5Assignemnt1Component } from './day5-assignemnt1/day5-assignemnt1.component';
import { Day5Practice1Component } from './day5-practice1/day5-practice1.component';
import { Day5Practice2Component } from './day5-practice2/day5-practice2.component';
import { Day5Component } from './day5/day5.component';
import { Day6Practice1Component } from './day6-practice1/day6-practice1.component';
import { Day6Practice2Component } from './day6-practice2/day6-practice2.component';
import { Day6Component } from './day6/day6.component';
import { Day7Assignemnt1Component } from './day7-assignemnt1/day7-assignemnt1.component';
import { Day7Practice1Component } from './day7-practice1/day7-practice1.component';
import { Day7Practice2Component } from './day7-practice2/day7-practice2.component';
import { Day7Component } from './day7/day7.component';
import { Day8Practice1Component } from './day8-practice1/day8-practice1.component';
import { Day8Component } from './day8/day8.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path:'Day3', component : Day3Component,
    children:[
      {path : 'Assignment1', component : Day3Assignemnt1Component},
      {path : 'Practice1', component : Day3Practice1Component},
      {path : 'Practice2', component : Day3Practice2Component}
    ]
  },
  {
    path:'Day4', component : Day4Component,
    children : [
      {path : 'Assignment1', component : Day4Assignemnt1Component},
      {path : 'Practice1', component : Day4Practice1Component},
      {path : 'Practice2', component : Day4Practice2Component},
      {path : 'Practice3', component : Day4Practice3Component}
      
    ]
  },
  {
    path:'Day5', component : Day5Component,
    children : [
      {path : 'Assignment1', component : Day5Assignemnt1Component},
      {path : 'Practice1', component : Day5Practice1Component},
      {path : 'Practice2', component : Day5Practice2Component}
      
    ]
  },
  {
    path:'Day6', component : Day6Component,
    children : [
      {path : 'Practice1', component : Day6Practice1Component},
      {path : 'Practice2', component : Day6Practice2Component},
      
      
    ]
  },
  {
    path:'Day7', component : Day7Component,
    children : [
      {path : 'Assignment1', component : Day7Assignemnt1Component},
      {path : 'Practice1', component : Day7Practice1Component},
      {path : 'Practice2', component : Day7Practice2Component},
      
      
    ]
  },
  {
    path:'Day8', component : Day8Component,
    children : [
      {path : 'Practice1', component : Day8Practice1Component}
    ]
  },
  {
    path:'Day15', component : Day15Component,
    children : [
      {path : 'Assignment1', component : Day15Assignemnt1Component},
      {path : 'Practice1', component : Day15Practice1Component},
      {path : 'Practice2', component : Day15Practice2Component}
      
    ]
  },
  {
    path:'Day16', component : Day16Component,
    children : [
      {path : 'Assignment1', component : Day16Assignemnt1Component},
      {path : 'Practice1', component : Day16Practice1Component},
      {path : 'Practice2', component : Day16Practice2Component},
      {path : 'Practice2', component : Day16Practice3Component}
      
    ]
  },
  {
    path:'Day17', component : Day17Component,
    children : [
      {path : 'Assignment1', component : Day17Assignemnt1Component}
      
    ]
  },
  {
    path:'Day19', component : Day19Component,
    children : [
      {path : 'Practice1', component : Day19Practice1Component},
      {path : 'Practice2', component : Day19Practice2Component},
      {path : 'Practice2', component : Day19Practice3Component}
      
    ]
  },
  {
    path:'Day20', component : Day20Component,
    children : [
      {path : 'Assignment1', component : Day20Assignemnt1Component}
    ]
  },
  {path:'**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  Day3Component,
  Day3Assignemnt1Component,
  Day3Practice1Component,
  Day3Practice2Component,
  Day4Component,
  Day4Assignemnt1Component,
  Day4Practice1Component,
  Day4Practice2Component,
  Day4Practice3Component,
  Day5Component,
  Day5Assignemnt1Component,
  Day5Practice1Component,
  Day5Practice2Component,
  Day6Component,
  Day6Practice1Component,
  Day6Practice2Component,
  Day7Component,
  Day7Assignemnt1Component,
  Day7Practice1Component,
  Day7Practice2Component,
  Day8Component,
  Day8Practice1Component,
  Day15Component,
  Day15Assignemnt1Component,
  Day15Practice1Component,
  Day15Practice2Component,
  Day16Component,
  Day16Assignemnt1Component,
  Day16Practice1Component,
  Day16Practice2Component,
  Day16Practice3Component,
  Day17Component,
  Day17Assignemnt1Component,
  Day18Component,
  Day19Component,
  Day19Practice1Component,
  Day19Practice2Component,
  Day19Practice3Component,
  Day20Component,
  Day20Assignemnt1Component,
  PageNotFoundComponent
 
];


