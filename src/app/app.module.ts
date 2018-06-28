// modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RegisterModule} from './register/register.module';
// components
import { AppComponent } from './app.component';
import {RegisterComponent} from './register/register/register.component';
import { AppRoutingModule } from './app-routing.module';

import { AppRoutingModule } from './app-routing.module';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,

    RegisterModule,

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
