import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  menu: Array<any> = [
    {
      path: ['/', 'ownbootcamps'],
      name: 'Mis Bootcamps',
      class: '',
      role: [''],
    },
    {
      path: ['/', 'inscriptions'],
      name: 'Mis Inscripción',
      class: '',
      role: [''],
    },
    {
      path: ['/', 'logs'],
      name: 'Crear Bootcamp',
      class: 'create',
      role: [''],
    },


  ]
  constructor() { }

  ngOnInit(): void {
  }

}
