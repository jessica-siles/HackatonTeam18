import { Injectable } from '@angular/core';
import { getFirestore } from 'firebase/firestore';
import { FirebaseService } from './firebase.service';
import { getDocs, query, collection,where } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private fbService: FirebaseService) { }

  db = getFirestore(this.fbService.app);

  getFirestore() {
    return this.db;
  }

  public async getBootcamps() {
    console.log('s')
    const q = query(collection(this.db, 'bootcamp')
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot;

  }

  public async getBootcampsPorEmpresa() {
    let infoUser = JSON.parse(localStorage.getItem('hack-team-18')!);
    console.log(infoUser.user.uid)

    const q = query(collection(this.db, 'bootcamp'),where("idEmpresa","==",infoUser.user.uid));
    const querySnapshot = await getDocs(q);
    return querySnapshot;

  }


  public async getInscripciones() {
    let infoUser = JSON.parse(localStorage.getItem('hack-team-18')!);
    console.log(infoUser.user.uid)
    const q = query(collection(this.db, 'inscripcion'),where("idUsuario","==",infoUser.user.uid));
    const querySnapshot = await getDocs(q);
    return querySnapshot;

  }

}
