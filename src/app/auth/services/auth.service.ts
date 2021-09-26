import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { createUserWithEmailAndPassword } from 'firebase/auth';

import { FirebaseService } from '../../core/services/firebase.service';

import { AccountModel } from '../models/account.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fbService: FirebaseService, private router: Router) { }

  createAccount(data: AccountModel) {
    console.log(data);
    createUserWithEmailAndPassword(this.fbService.auth, data.username, data.password)
      .then(userCredential => {
        console.log(userCredential)
      })
      .catch( err => {
        console.log(err);
      })
    this.router.navigate(['/', 'login'])
  }

  registerProfile(data: AccountModel) {
    // this.fbService.createProfile(data);
  }

}
