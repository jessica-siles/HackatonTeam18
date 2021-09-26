import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BootcampsComponent } from './bootcamps/bootcamps.component';
import { MisInscripcionesComponent } from './mis-inscripciones/mis-inscripciones.component';

const routes: Routes = [
  {
    path : '', redirectTo : 'bootcamps', pathMatch : 'full'
  },
  {
    path : 'bootcamps', component: BootcampsComponent
  },
  {
    path : 'mis-inscripciones', component: MisInscripcionesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
