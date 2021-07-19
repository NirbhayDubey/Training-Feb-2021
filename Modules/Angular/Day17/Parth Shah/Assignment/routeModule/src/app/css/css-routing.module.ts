import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CssfileComponent } from './cssfile/cssfile.component';
import { Day2CssComponent } from './day2-css/day2-css.component';
import { Day3CssComponent } from './day3-css/day3-css.component';
import { Day4CssComponent } from './day4-css/day4-css.component';

const routes: Routes = [

  { path: 'cssHome', component: CssfileComponent,
  children:[
    { path: 'Day2Css', component: Day2CssComponent},
    { path: 'Day3Css', component: Day3CssComponent},
    { path: 'Day4Css', component: Day4CssComponent},

  ]}
    

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CssRoutingModule { }
