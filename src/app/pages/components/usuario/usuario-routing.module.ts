import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BootcampsComponent } from './bootcamps/bootcamps.component';
import { MisInscripcionesComponent } from './mis-inscripciones/mis-inscripciones.component';

const routes: Routes = [
  {
    path : 'usuario/bootcamps', component: BootcampsComponent
  },
  {
    path : 'usuario/mis-inscripciones', component: MisInscripcionesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
