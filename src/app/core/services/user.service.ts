import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  user = {
    loggedIn: false
  }

  getLoggedStatus(): boolean {
    return this.user.loggedIn;
  }
}
