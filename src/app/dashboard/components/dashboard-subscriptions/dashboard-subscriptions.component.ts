import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/core/services/firestore.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard-subscriptions',
  templateUrl: './dashboard-subscriptions.component.html',
  styleUrls: ['./dashboard-subscriptions.component.scss']
})
export class DashboardSubscriptionsComponent implements OnInit {
  bootcampsArray: any[] = [

  ];
  altaArray: any[] = [


  ];
  inscripcionesArray: any[] = [];

  EmpresasArray: any[] = [];
  validRoles = ['user', 'company']
  logueado: string = 'user'

  constructor(private firestoreService: FirestoreService,private router: Router) {

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
    })
  }

  async getBootcamps() {
    this.firestoreService.getBootcamps().then((e: any) => {
      e.forEach((doc: any) => {
        this.bootcampsArray.push({
          id: doc.id,
          descripcion: doc.data().descripcion,
          empresa: doc.data().empresa,
          idEmpresa: doc.data().idEmpresa,
          estado: doc.data().estado
        });

      })
      this.bootcampsArray.forEach( b => {
        console.log(b)

        this.inscripcionesArray.forEach( i=> {
          if(i.empresa == b.empresa){
            b.asistio = 'Asistido'
          }else{
            b.asistio = 'Falta'
          }
        })
      })
    })
  }


  Inscribirse(bootcamps:any){
    let infoUser = JSON.parse(localStorage.getItem('hack-team-18')!);
    let user = infoUser.user

    this.firestoreService
    .addInscription(bootcamps.descripcion,bootcamps.empresa,bootcamps.id,user.uid
      ,user.profile.username,bootcamps.idEmpresa).then(res => { this.router.navigate(['/','inscriptions'])})
  }


}
