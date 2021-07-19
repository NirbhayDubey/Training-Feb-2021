import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { CalcComponent } from './calc/calc.component';
import { ManualComponent } from './Manual/Manual.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HelloWorldComponent,
    CalcComponent,
    ManualComponent

  ],
  imports: [
    BrowserModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
