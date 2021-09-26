import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  user = {
    loggedIn: false,
    loginError: false,
    profile: {},
    uid: '',
    token: { }
  }

  getLoggedStatus(): boolean {
    return this.user.loggedIn;
  }

  setLoggenStatus(status: boolean) {
    this.user.loggedIn = status;
  }

  setUserProfile(data: any) {
    this.user.profile = data;
  }

  setToken(token: any) {
    this.user.token = token;
  }

  setUid(uid: string) {
    this.user.uid = uid;
  }

  getUid() {
    return this.user.uid;
  }

  setErrorLogin(error: boolean) {
    this.user.loginError = error;
  }

  errorLogin() {
    return of(this.user.loginError)
  }
}
