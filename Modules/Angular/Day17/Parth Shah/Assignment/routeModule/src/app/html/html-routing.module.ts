import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HtmlFileComponent } from './html-file/html-file.component';
import { Day1HtmlComponent } from './day1-html/day1-html.component';

const routes: Routes = [
 
 
    
    { path: 'htmlHome', component: HtmlFileComponent,
  children:[
    { path: 'Day1html', component: Day1HtmlComponent},
  ]} 
    


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HtmlRoutingModule { }
