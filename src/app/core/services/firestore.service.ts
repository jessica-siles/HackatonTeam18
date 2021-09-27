import { Injectable } from '@angular/core';
import { getFirestore } from 'firebase/firestore';
import { FirebaseService } from './firebase.service';
import { getDocs, query, collection,where,addDoc } from 'firebase/firestore';

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

  public async addBootcamps(descripcion:any,empresa:any,idempresa:any) {
    console.log(descripcion,empresa,idempresa)
    const docRef = await addDoc(collection(this.db, "bootcamp"), {
      descripcion,
      empresa,
      idEmpresa:idempresa
    });

    return docRef


  }

  /*
  const docRef = await addDoc(collection(db, "cities"), {
  name: "Tokyo",
  country: "Japan"
}); */



}
