import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';

@Injectable()
export class UserService {

  constructor(private router: Router) { }

  db = 'hack-team-18';

  user = {
    loggedIn: false,
    loginError: false,
    profile: {},
    uid: '',
    token: {}
  }

  getLoggedStatus(): boolean {
    return this.user.loggedIn;
  }

  setLoggenStatus(status: boolean) {
    this.user.loggedIn = status;
  }

  setUserProfile(data: any) {
    this.user.profile = data;
    this.saveLocalContent(this.user);
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

  setUserConfStorage(data: any) {
    this.user = data;
    if (this.user.loggedIn) {
      this.router.navigate(['/', 'bootcamps']);
    }
  }

  searchLocalContent() {
    if (!!localStorage.getItem(this.db)) {
      const { user } = JSON.parse(localStorage.getItem(this.db) || '{}');
      this.setUserConfStorage(user);
      return;
    }
  }

  saveLocalContent(user: any) {
    localStorage.setItem(this.db, JSON.stringify({ user }));
  }

  resetUserService() {
    this.user = {
      loggedIn: false,
      loginError: false,
      profile: {},
      uid: '',
      token: {}
    };
    localStorage.removeItem(this.db);
  }
}
