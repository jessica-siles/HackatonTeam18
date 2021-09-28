import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountModel } from 'src/app/auth/models/account.model';
import { Empresas } from 'src/app/auth/models/empresa.model';
import { FirestoreService } from 'src/app/core/services/firestore.service';

@Component({
  selector: 'app-dashboard-bootcamps-empresa',
  templateUrl: './dashboard-bootcamps-empresa.component.html',
  styleUrls: ['./dashboard-bootcamps-empresa.component.scss']
})
export class DashboardBootcampsEmpresaComponent implements OnInit {

  public disab = true;
  public textoDescripcion = ''
  cardMostrado = false;
  bootcamP:any;

  constructor(private firestoreService: FirestoreService,private router: Router) { }

  ngOnInit(): void {
    this.getBootcampsSegunEmpresa();
  }

  // empresasArray: Empresas[] = [
  //   {nombre:'Google',descripcion:'Bootcamp este fin de semana del 25 al 16 de octubre'},
  //   {nombre:'Google',descripcion:'Bootcamp este fin de semana del 26 al 16 de octubre'},
  //   {nombre:'Google',descripcion:'Bootcamp este fin de semana del 27 al 16 de octubre'},
  //   {nombre:'Google',descripcion:'Bootcamp este fin de semana del 28 al 16 de octubre'},
  // ];
  // usuariosArray: AccountModel[] = [
  //   {username: 'Jose',
  //     password: '123645',
  //     password2: '123645',
  //     linkedin: 'www.com',
  //     country: 'españa',
  //     repository: 'github',
  //     description: 'soy jose',
  //     rol: 'usuario'}

  // ];

  // validRoles = ['user', 'company']
  // logueado :string = 'user'

  bootcampsArray: any[] = [];
  // inscriptionsArray: any[] = [];
  getBootcampsSegunEmpresa(){
    let inscriptionsArray:any[] = [];
    this.firestoreService.getBootcampsPorEmpresa().then(bootcamps => {
      bootcamps.forEach((bootcamp: any) => {

        this.firestoreService.getInscripcion(bootcamp.id).then( inscriptions => {

          inscriptions.forEach(inscription => {
              if(inscription.data().estado != false){

                inscriptionsArray.push(inscription.data())
              }
          })
          // console.log(this.inscriptionsArray)
          this.bootcampsArray.push({
            id : bootcamp.id,
            descripcion : bootcamp.data().descripcion,
            empresa :bootcamp.data().empresa,
            estado : bootcamp.data().estado,
            idEmpresa: bootcamp.data().idEmpresa,
            inscripciones: inscriptionsArray
          });

          inscriptionsArray = [];
          console.log({
            id : bootcamp.id,
            descripcion : bootcamp.data().descripcion,
            empresa :bootcamp.data().empresa,
            estado : bootcamp.data().estado,
            idEmpresa: bootcamp.data().idEmpresa,
            inscripciones: inscriptionsArray
          })


        })



      })
      console.log(this.bootcampsArray)
    })
  }

  eliminarBootcamp(bootcamp:any){
    this.firestoreService.deleteBootcamp(bootcamp.descripcion,bootcamp.empresa,bootcamp.idEmpresa,bootcamp.id).then(e=> {
      this.router.navigate(['/','subscriptions'])
    })
  }

  confirmarEdit(bootcamp:any){
    // console.log(bootcamp)
    this.firestoreService.editBootcamp(bootcamp.descripcion,bootcamp.empresa,bootcamp.idEmpresa,bootcamp.id).then(e=> {
      this.router.navigate(['/','subscriptions'])
    })
  }
  mostrarUsers(){
    console.log('Hola')
  }
}
