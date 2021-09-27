import { Injectable } from '@angular/core';
import { getFirestore } from 'firebase/firestore';
import { FirebaseService } from './firebase.service';
import { getDocs,query,collection } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private fbService: FirebaseService) { }

  db = getFirestore(this.fbService.app);

  getFirestore() {
    return this.db;
  }

  public async getBootcamps(){
    console.log('s')
  const q = query(collection(this.db,'bootcamp')
  );
  // console.log(q)
    const querySnapshot = await getDocs(q);
    return querySnapshot;
    // querySnapshot.forEach((doc) => {
    //   console.log(doc.data());
    // });
  }

}
