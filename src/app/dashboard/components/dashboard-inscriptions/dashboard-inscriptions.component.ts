import { Component, OnInit } from '@angular/core';
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
  constructor(private firestoreService: FirestoreService) { }
  inscripcionesArray: any[] = []

  ngOnInit(): void {
    this.firestoreService.getInscripciones().then(e => {
      e.forEach((doc: any) => {
        this.inscripcionesArray.push(doc.data());
      })
      console.log(this.inscripcionesArray)
    })
  }

}
