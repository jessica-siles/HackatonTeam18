import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirestoreService } from 'src/app/core/services/firestore.service';
import { Empresas } from '../../../auth/models/empresa.model';

@Component({
  selector: 'app-dashboard-inscriptions',
  templateUrl: './dashboard-inscriptions.component.html',
  styleUrls: ['./dashboard-inscriptions.component.scss']
})
export class DashboardInscriptionsComponent implements OnInit {
  // business: Empresas[] = [
  //   { nombre: 'Google', descripcion: 'Bootcamp este fin de semana del 25 al 16 de octubre' },
  //   { nombre: 'Hk', descripcion: 'Bootcamp este fin de semana del 25 al 16 de octubre' }
  // ];
  constructor(private firestoreService: FirestoreService,private router: Router) { }
  inscripcionesArray: any[] = []

  ngOnInit(): void {
    this.firestoreService.getInscripciones().then(e => {
      e.forEach((doc: any) => {
        this.inscripcionesArray.push({
          id : doc.id,
          descripcion: doc.data().descripcion,
          empresa: doc.data().empresa,
          estado: doc.data().estado,
          idBootcamp: doc.data().idBootcamp,
          idEmpresa: doc.data().idEmpresa,
          idUsuario: doc.data().idUsuario,
          username: doc.data().username,
         });
      })
      console.log(this.inscripcionesArray)
    })
  }

  cancelarInscripcion(item:any){
    this.firestoreService.cancelInscription(item.descripcion,item.empresa,item.idBootcamp,
      item.idUsuario,item.username,item.idEmpresa,item.id).then(e => {
        this.router.navigate(['/','subscriptions'])
      })
  }

}
