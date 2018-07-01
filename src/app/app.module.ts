import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {LoginModule} from './login/login.module';
import {LoginComponent} from './login/login/login.component';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    LoginModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
