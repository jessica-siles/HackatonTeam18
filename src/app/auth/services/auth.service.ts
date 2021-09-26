import { Injectable } from '@angular/core';

import { FirebaseService } from '../../core/services/firebase.service';

import { AccountModel } from '../models/account.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fbService: FirebaseService) { }

  createAccount(data: AccountModel) {
    console.log(data)
  }

}
