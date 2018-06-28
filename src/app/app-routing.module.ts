import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegisterComponent} from './register/register/register.component';
import {AppComponent} from './app.component';


const routes: Routes = [
  { path: '/register', component: RegisterComponent },
  { path: 'login', component:  AppComponent}
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {}
