import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HtmlComponent } from './html/html.component';
import { CssComponent } from './css/css.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { Day1htmlComponent } from './day1html/day1html.component';
import { Cssday1Component } from './cssday1/cssday1.component';
import { CssDay2Component } from './css-day2/css-day2.component';
import { CssDay3Component } from './css-day3/css-day3.component';
import { JsDay1Component } from './js-day1/js-day1.component';
import { JsDay2Component } from './js-day2/js-day2.component';
import { JsDay3Component } from './js-day3/js-day3.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/htmlFile', pathMatch: 'full' },
  { path: 'htmlFile', component:  HtmlComponent,
  children: [
    { path: 'Day1html', component: Day1htmlComponent}
    
  ]
},
  { path: 'cssFile', component:  CssComponent,
  children: [
    { path: 'Day1Css', component: Cssday1Component},
    { path: 'Day2Css', component: CssDay2Component},
    { path: 'Day3Css', component: CssDay3Component}
    
  ]
},
  { path: 'JsFile', component:  JavascriptComponent,
  children: [
    { path: 'Day1Js', component: JsDay1Component},
    { path: 'Day2Js', component: JsDay2Component},
    { path: 'Day3Js', component: JsDay3Component}
    
  ]


},
{ path: '**',   component: PageNotFoundComponent }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
