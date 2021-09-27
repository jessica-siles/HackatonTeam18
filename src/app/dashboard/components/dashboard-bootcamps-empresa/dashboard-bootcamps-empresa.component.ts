import { Component, OnInit } from '@angular/core';
import { AccountModel } from 'src/app/auth/models/account.model';
import { Empresas } from 'src/app/auth/models/empresa.model';
import { FirestoreService } from 'src/app/core/services/firestore.service';

@Component({
  selector: 'app-dashboard-bootcamps-empresa',
  templateUrl: './dashboard-bootcamps-empresa.component.html',
  styleUrls: ['./dashboard-bootcamps-empresa.component.scss']
})
export class DashboardBootcampsEmpresaComponent implements OnInit {

  constructor(private firestoreService: FirestoreService) { }

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

  bootcampsArray: any[] = []
  getBootcampsSegunEmpresa(){

    this.firestoreService.getBootcampsPorEmpresa().then(e => {
      e.forEach((doc: any) => {
        this.bootcampsArray.push(doc.data());

      })
      console.log(this.bootcampsArray)
    })
  }
}
