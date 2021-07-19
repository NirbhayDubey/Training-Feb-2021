import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { StarplusComponent } from './starplus/starplus.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { LoginComponent } from './login/login.component';
import { ContentDisplayComponent } from './content-display/content-display.component';
import { MovieComponent } from './movie/movie.component';
import { AuthGuard } from './auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    StarplusComponent,
    RegisterComponent,
    SubscribeComponent,
    LoginComponent,
    ContentDisplayComponent,
    MovieComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent, AuthGuard]
})
export class AppModule { }
