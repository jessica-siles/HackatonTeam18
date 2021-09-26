import { Injectable } from '@angular/core';

import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

import { environment } from '../../../environments/environment';

const app = initializeApp(environment.firebaseConfig);
const auth = getAuth();

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  app = app;
  auth = auth;

  constructor() { }
}
