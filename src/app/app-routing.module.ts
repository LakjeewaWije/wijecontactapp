import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// components
import {RegisterComponent} from './register/register/register.component';
const routes: Routes = [
  { path: 'register', component: RegisterComponent },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [ RouterModule ],
  declarations: []
})


export class AppRoutingModule { }
