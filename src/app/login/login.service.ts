import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }
  getLogingInUser(): boolean {
    return true;
  }
  isLoggedIn(): boolean {
    return true;
  }
}
