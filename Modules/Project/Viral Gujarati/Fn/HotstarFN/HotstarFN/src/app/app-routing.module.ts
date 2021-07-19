import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { StarplusComponent } from './starplus/starplus.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ContentDisplayComponent } from './content-display/content-display.component';
import { MovieComponent } from './movie/movie.component';
import { AuthGuard } from './auth.guard';


const routes: Routes  = [
  {path: '', component: HomePageComponent},
  {path: 'home', component: HomePageComponent},
  {path:'starplus', component:StarplusComponent},
  
  {path:'subscribe', component:SubscribeComponent,
    canActivate: [AuthGuard]
  },
  {path:'register', component:RegisterComponent},
  {path:'login', component:LoginComponent},
  {path:'content/:id',component:ContentDisplayComponent},
  {path:'movie', component:MovieComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
