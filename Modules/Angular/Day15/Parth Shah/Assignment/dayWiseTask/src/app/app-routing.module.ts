import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HtmlWorkComponent } from './html-work/html-work.component';
import { CssWorkComponent } from './css-work/css-work.component';
import { JavascriptWorkComponent } from './javascript-work/javascript-work.component';
import { Day1HtmlComponent } from './day1-html/day1-html.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Day1CssComponent } from './day1-css/day1-css.component';
import { Day3CssComponent } from './day3-css/day3-css.component';
import { Day2CssComponent } from './day2-css/day2-css.component';
import { JsFile1Component } from './js-file1/js-file1.component';
import { JsFile2Component } from './js-file2/js-file2.component';
import { JsFile3Component } from './js-file3/js-file3.component';


const routes: Routes = [

  { path: '', redirectTo: '/htmlFile', pathMatch: 'full' },
  { path: 'htmlFile', component:  HtmlWorkComponent},
  { path: 'cssFile', component:  CssWorkComponent},
  { path: 'JsFile', component:  JavascriptWorkComponent},
  { path: 'day1Html', component:  Day1HtmlComponent},
  { path: 'day1Css', component:  Day1CssComponent},
  { path: 'day2Css', component:  Day2CssComponent},
  { path: 'day3Css', component:  Day3CssComponent},
  { path: 'day1Js', component:  JsFile1Component},
  { path: 'day2Js', component:  JsFile2Component},
  { path: 'day3Js', component:  JsFile3Component},

  { path: '**',   component: PageNotFoundComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HtmlWorkComponent,
  CssWorkComponent, 
  JavascriptWorkComponent,
  Day1HtmlComponent,
  PageNotFoundComponent]