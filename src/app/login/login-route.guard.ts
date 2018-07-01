import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import {LoginService} from './login.service';

@Injectable({
  providedIn: 'root'
})
export class LoginRouteGuard implements CanActivate {
  constructor(private loginService: LoginService) { }
  canActivate() {
   // console.log(this.loginService.isLoggedIn());
    console.log(this.loginService.isLoggedIn());
    return this.loginService.isLoggedIn();
  }
}
