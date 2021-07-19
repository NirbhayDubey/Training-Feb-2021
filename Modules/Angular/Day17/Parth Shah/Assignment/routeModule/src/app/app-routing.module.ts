import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  {
    path: "html",
    loadChildren: () => import("./html/html.module").then(mod => mod.HtmlModule)
  },
  {
    path: "css",
    loadChildren: () => import("./css/css.module").then(mod => mod.CssModule)
  },
  {
    path: "js",
    loadChildren: () => import("./js/js.module").then(mod => mod.JsModule)
  },
  { path: '',component: HomePageComponent},
  { path: '**',   component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
