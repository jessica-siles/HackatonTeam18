import { Injectable } from '@angular/core';
import { getFirestore } from 'firebase/firestore';
import { FirebaseService } from './firebase.service';
import { getDocs, query, collection,where,addDoc,doc,setDoc } from 'firebase/firestore';

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
  
    const q = query(collection(this.db, 'bootcamp')
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot;

  }


  public async getBootcampsPorEmpresa() {
    let infoUser = JSON.parse(localStorage.getItem('hack-team-18')!);

    const q = query(collection(this.db, 'bootcamp'),where("idEmpresa","==",infoUser.user.uid));
    const querySnapshot = await getDocs(q);
    return querySnapshot;

  }


  public async getInscripciones() {
    let infoUser = JSON.parse(localStorage.getItem('hack-team-18')!);
   
    const q = query(collection(this.db, 'inscripcion'),where("idUsuario","==",infoUser.user.uid));
    const querySnapshot = await getDocs(q);
    return querySnapshot;

  }

  public async getInscripcion(idBootcamp:any) {
    const q = query(collection(this.db, 'inscripcion'),where("idBootcamp","==",idBootcamp));
    const querySnapshot = await getDocs(q);
    return querySnapshot;

  }



  public async addBootcamps(descripcion:any,empresa:any,idempresa:any) {
   
    const docRef = await addDoc(collection(this.db, "bootcamp"), {
      descripcion,
      empresa,
      idEmpresa:idempresa,
      estado:true
    });

    return docRef


  }

  public async deleteBootcamp(descripcion:any,empresa:any,idempresa:any,idBootcamp:any) {
    
    const docRef = await setDoc(doc(this.db, "bootcamp",idBootcamp), {
      descripcion,
      empresa,
      idEmpresa:idempresa,
      estado:false
    });

    return docRef


  }

  public async editBootcamp(descripcion:any,empresa:any,idempresa:any,idBootcamp:any) {
    
    const docRef = await setDoc(doc(this.db, "bootcamp",idBootcamp), {
      descripcion,
      empresa,
      idEmpresa:idempresa,
      estado:true
    });

    return docRef
  }

 public async addInscription(descripcion:any,empresa:any,idBootcamp:any,
  idUsuario:any,username:any,idEmpresa:any,idInscripcion:any){
  if(idInscripcion == undefined){
    const docRef = await addDoc(collection(this.db, "inscripcion"), { 
    descripcion,
    empresa,
    idBootcamp,
    idUsuario,
    username,
    idEmpresa,
    estado:true
  });

  return docRef
  }
  else{
  const docRef = await setDoc(doc(this.db, "inscripcion", idInscripcion), { 
    descripcion,
    empresa,
    idBootcamp,
    idUsuario,
    username,
    idEmpresa,
    estado:true
  });

  return docRef
  }
 }


 public async cancelInscription(descripcion:any,empresa:any,idBootcamp:any,
  idUsuario:any,username:any,idEmpresa:any,idInscription:any){

  const docRef = await setDoc(doc(this.db, "inscripcion",idInscription), {
    descripcion,
    empresa,
    idBootcamp,
    idUsuario,
    username,
    idEmpresa,
    estado:false
  });

  return docRef


 }



}
