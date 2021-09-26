import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { BootcampsComponent } from './bootcamps/bootcamps.component';
import { MisInscripcionesComponent } from './mis-inscripciones/mis-inscripciones.component';



@NgModule({
  declarations: [
    BootcampsComponent,
    MisInscripcionesComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule
  ]
})
export class UsuarioModule { }
