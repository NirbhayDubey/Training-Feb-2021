import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CssComponent } from './css/css.component';
import { HtmlComponent } from './html/html.component';
import { JacascriptComponent } from './jacascript/jacascript.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Day3Component } from './day3/day3.component';
import { D3AssignComponent } from './d3-assign/d3-assign.component';
import { D3PracComponent } from './d3-prac/d3-prac.component';
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
import { PageNotFoundComponent} from './page-not-found/page-not-found.component';
 
const routes: Routes = [ {path:'home',component: NavbarComponent},
{path:'html',component:HtmlComponent, 
children:[{
  path:'day3',component:Day3Component,
  
  children:[{
    path:'practical',component:D3PracComponent
  },
  {
    path:'assignment',component:D3AssignComponent
  }  
]
}]},

{path:'css',component:CssComponent,
children:[
  {path:'day4',component:Day4Component},
  {path:'day5',component:Day5Component},
  {path:'day6',component:Day6Component},
  {path:'day7',component:Day7Component},
  {path:'day8',component:Day8Component}
]},


{path:'javascript',component:JacascriptComponent,
children:[
  {path:'day15',component:Day15Component},
  {path:'day16',component:Day16Component},
  {path:'day17',component:Day17Component},
  {path:'day18',component:Day18Component},
  {path:'day18',component:Day19Component},
  {path:'day20',component:Day20Component}
]},
{path:'',redirectTo:'/home',pathMatch:'full'},
{path:'**',component:PageNotFoundComponent}
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
