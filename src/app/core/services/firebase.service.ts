import { Injectable } from '@angular/core';

import 'firebase/auth';
import fb from 'firebase/app';

import { environment } from '../../../environments/environment';

const app = fb.initializeApp(environment.FirebaseConfig);
const auth = app.auth();

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  auth = auth;
  app = app;

  constructor() { }
}
