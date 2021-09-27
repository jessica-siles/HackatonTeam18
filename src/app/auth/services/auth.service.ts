import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { setDoc, doc, getDoc } from 'firebase/firestore';
import { FirestoreService } from 'src/app/core/services/firestore.service';
import { UserService } from 'src/app/core/services/user.service';

import { FirebaseService } from '../../core/services/firebase.service';

import { AccountModel } from '../models/account.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private fbService: FirebaseService,
    private router: Router,
    private fstoreService: FirestoreService,
    private userService: UserService
  ) { }

  auth = this.fbService.auth;

  createAccount(data: AccountModel) {
    createUserWithEmailAndPassword(this.auth, data.username, data.password)
      .then(userCredential => {
        this.registerProfile(data, userCredential.user.uid);
      })
      .catch(err => {
        console.log(err);
        this.router.navigate(['/', 'login'])
      })
  }

  async registerProfile({ username, password, linkedin, country, description, rol, repository }: AccountModel, uid: string) {
    await setDoc(doc(this.fstoreService.getFirestore(), 'usuario', uid), {
      username,
      password,
      linkedin,
      country,
      description,
      rol,
      [rol === 'user' ? 'repository' : 'webpage']: repository
    })
      .then(res => this.router.navigate(['/', 'confirmation'], { queryParams: { status: true, error: '' } }))
      .catch(err => this.router.navigate(['/', 'confirmation'], { queryParams: { status: true, error: err } }));
  }

  loginUser({ email, password }: any) {
    signInWithEmailAndPassword(this.auth, email, password)
      .then((userCredential: any) => {
        this.userService.setErrorLogin(false);
        this.userService.setLoggenStatus(true);
        this.userService.setToken(userCredential.user['stsTokenManager']);
        this.userService.setUid(userCredential.user.uid);
        this.getUserProfile().then(res => {
          this.router.navigate(['/', 'subscriptions']);
        });
      })
      .catch(err => this.userService.setErrorLogin(true))
  }

  logoutUser() {
    signOut(this.auth)
      .then(() => {
        this.userService.resetUserService();
        this.router.navigate(['/', 'login']);
      })
      .catch(err => console.log(err));
  }

  async getUserProfile() {
    console.log(this.fstoreService.getFirestore(), 'usuario', this.userService.getUid())
    const profile = doc(this.fstoreService.getFirestore(), 'usuario', this.userService.getUid());
    const profileData = await getDoc(profile);
    this.userService.setUserProfile(profileData.data());
  }
  redirectLogin() {

  }
  checkSession = (redirect = true) => {
    return new Promise((resolve, reject) => {
      if (this.userService.getLoggedStatus()) {
        resolve(true);
      } else {
        redirect ? this.redirectLogin() : null;
        reject(false);
      }
    }
    );
  };



}


