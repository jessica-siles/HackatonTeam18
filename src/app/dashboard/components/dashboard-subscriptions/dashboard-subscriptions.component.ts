import { Component, OnInit } from '@angular/core';
import { Empresas } from 'src/app/auth/models/empresa.model';
import { AccountModel } from 'src/app/auth/models/account.model';
@Component({
  selector: 'app-dashboard-subscriptions',
  templateUrl: './dashboard-subscriptions.component.html',
  styleUrls: ['./dashboard-subscriptions.component.scss']
})
export class DashboardSubscriptionsComponent {
  empresasArray: Empresas[] = [
    {nombre:'Google',descripcion:'Bootcamp este fin de semana del 25 al 16 de octubre'},
    {nombre:'Hk',descripcion:'Bootcamp este fin de semana del 25 al 16 de octubre'},
    {nombre:'Teams',descripcion:'Bootcamp este fin de semana del 25 al 16 de octubre'},
    {nombre:'Studio',descripcion:'Bootcamp este fin de semana del 25 al 16 de octubre'},
  ];
  usuariosArray: AccountModel[] = [
    {username: 'Jose',
      password: '123645',
      password2: '123645',
      linkedin: 'www.com',
      country: 'españa',
      repository: 'github',
      description: 'soy jose',
      rol: 'usuario'}
    
  ];

  validRoles = ['user', 'company']
  logueado :string = 'user'
}
