import { Component, OnInit } from '@angular/core';
import { Empresas } from 'src/app/auth/models/empresa.model';
import { AccountModel } from 'src/app/auth/models/account.model';
import { FirestoreService } from 'src/app/core/services/firestore.service';


@Component({
  selector: 'app-dashboard-subscriptions',
  templateUrl: './dashboard-subscriptions.component.html',
  styleUrls: ['./dashboard-subscriptions.component.scss']
})
export class DashboardSubscriptionsComponent implements OnInit {
  bootcampsArray: any[] = [

  ];
  usuariosArray: any[] = [


  ];
  inscripcionesArray: any[] = []

  validRoles = ['user', 'company']
  logueado: string = 'user'

  constructor(private firestoreService: FirestoreService) {

  }
  ngOnInit() {
    this.getBootcampsInscripciones()
  }

  getBootcampsInscripciones(){
    this.firestoreService.getInscripciones().then(e => {
      e.forEach((doc: any) => {
        this.inscripcionesArray.push(doc.data());

      })
      this.getBootcamps();
      // console.log(e)
    })
    //
  }

  async getBootcamps() {
    this.firestoreService.getBootcamps().then((e: any) => {
      e.forEach((doc: any) => {
        this.bootcampsArray.push(doc.data());
      })
      this.bootcampsArray.forEach( b => {
        console.log(b)
        this.inscripcionesArray.forEach( i=> {
          if(i.empresa == b.empresa){
            b.estado = 'Asistido'
          }else{
            b.estado = 'Falta'
          }
        })
      })
    })
  }
}
