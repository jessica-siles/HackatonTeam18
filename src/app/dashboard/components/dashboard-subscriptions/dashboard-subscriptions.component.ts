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

  inscripcionesArray: any[] = [];

  // userArray : any[] = [];

  EmpresasArray: any[] = [];
  validRoles = ['user', 'company']
  logueado: string = 'user'

  constructor(private firestoreService: FirestoreService,private router: Router) {

  }
  ngOnInit() {
    let infoUser = JSON.parse(localStorage.getItem('hack-team-18')!);
    this.logueado = infoUser.user.profile.rol;


    this.getBootcamps()
  }

  // getBootcampsInscripciones(){
  //   this.firestoreService.getInscripciones().then(e => {
  //     e.forEach((doc: any) => {
  //       this.inscripcionesArray.push(doc.data());

  //     })
  //     this.getBootcamps();
  //   })
  // }

  async getBootcamps() {
    let infoUser = JSON.parse(localStorage.getItem('hack-team-18')!);


    this.firestoreService.getBootcamps().then((bootcamps: any) => {


      bootcamps.forEach((bootcamp: any) => {
        this.firestoreService.getInscripcion(bootcamp.id).then( inscripcion => {

          // this.userArray.push(inscripcion.docs[0].data)

          if(inscripcion.docs[0].data().idUsuario == infoUser.user.uid &&  inscripcion.docs[0].data().estado == true){
            bootcamp.asistio = 'Asistido'
          }else{
            bootcamp.asistio = 'Falta'
          }


          this.bootcampsArray.push({
            id: bootcamp.id,
            descripcion: bootcamp.data().descripcion,
            empresa: bootcamp.data().empresa,
            idEmpresa: bootcamp.data().idEmpresa,
            estado: bootcamp.data().estado,
            asistio: bootcamp.asistio
          });



        })

      })

    })
  }


  Inscribirse(bootcamps:any){
    let infoUser = JSON.parse(localStorage.getItem('hack-team-18')!);
    let user = infoUser.user


    this.firestoreService.getInscripcion(bootcamps.id).then( inscripcion => {



    this.firestoreService
    .addInscription(bootcamps.descripcion,bootcamps.empresa,bootcamps.id,user.uid
      ,user.profile.username,bootcamps.idEmpresa, inscripcion.docs[0].id).then(res => { this.router.navigate(['/','inscriptions'])})
    })

  }


}
