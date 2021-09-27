import { Component, OnInit } from '@angular/core';
import { Empresas } from '../../../auth/models/empresa.model';

@Component({
  selector: 'app-dashboard-inscriptions',
  templateUrl: './dashboard-inscriptions.component.html',
  styleUrls: ['./dashboard-inscriptions.component.scss']
})
export class DashboardInscriptionsComponent implements OnInit {
  business: Empresas[] = [
    { nombre: 'Google', descripcion: 'Bootcamp este fin de semana del 25 al 16 de octubre' },
    { nombre: 'Hk', descripcion: 'Bootcamp este fin de semana del 25 al 16 de octubre' }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
