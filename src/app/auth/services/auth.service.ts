import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';
import { FirestoreService } from 'src/app/core/services/firestore.service';

import { FirebaseService } from '../../core/services/firebase.service';

import { AccountModel } from '../models/account.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private fbService: FirebaseService,
    private router: Router,
    private fstoreService: FirestoreService
  ) { }

  createAccount(data: AccountModel) {
    console.log(data);
    createUserWithEmailAndPassword(this.fbService.auth, data.username, data.password)
      .then(userCredential => {
        this.registerProfile(data, userCredential.user.uid);
      })
      .catch( err => {
        this.router.navigate(['/', 'login'])
      })
  }

  async registerProfile({ username, password, linkedin, country, description, rol, repository }: AccountModel, uid: string) {
      await setDoc(doc(this.fstoreService.getFirestore(), 'usuario', uid),   {
        username,
        password,
        linkedin,
        country,
        description,
        rol, 
        [rol === 'user' ? 'repository' : 'webpage']: repository
      })
      .then( res => this.router.navigate(['/', 'confirmation'], { queryParams: { status: true, error: ''}}))
      .catch( err => this.router.navigate(['/', 'confirmation'], { queryParams: { status: true, error: err}}));
  }

}
