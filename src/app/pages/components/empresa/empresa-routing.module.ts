import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BootcampsComponent } from './bootcamps/bootcamps.component';
import { MisBootcampsComponent } from './mis-bootcamps/mis-bootcamps.component';

const routes: Routes = [
  {
    path : 'bootcamps', component: BootcampsComponent
  },
  {
    path : 'mis-bootcamps', component: MisBootcampsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpresaRoutingModule { }
