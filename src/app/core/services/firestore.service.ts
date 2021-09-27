import { Injectable } from '@angular/core';
import { getFirestore } from 'firebase/firestore';
import { FirebaseService } from './firebase.service';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private fbService: FirebaseService) { }

  db = getFirestore(this.fbService.app);

  getFirestore() {
    return this.db;
  }

}
