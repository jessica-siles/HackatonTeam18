import { Component, OnInit } from '@angular/core';
import { Empresas } from 'src/app/auth/models/empresa.model';
import { AccountModel } from 'src/app/auth/models/account.model';
import { FirestoreService } from 'src/app/core/services/firestore.service';


@Component({
  selector: 'app-dashboard-subscriptions',
  templateUrl: './dashboard-subscriptions.component.html',
  styleUrls: ['./dashboard-subscriptions.component.scss']
})
export class DashboardSubscriptionsComponent implements OnInit{
  empresasArray: any[] = [

  ];
  usuariosArray: any[] = [


  ];

  validRoles = ['user', 'company']
  logueado :string = 'user'

  constructor( private firestoreService: FirestoreService ){

  }
  ngOnInit(){
    this.getBootcamps()
  }

  async getBootcamps() {
    this.firestoreService.getBootcamps().then( (e:any) => {
      e.forEach((doc:any) => {
        this.empresasArray.push(doc.data());
        console.log(doc.data().usuarios)
      })
  })
  }
}
