import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BootcampsComponent } from './bootcamps/bootcamps.component';

const routes:Routes = [
  { path: '', redirectTo:'bootcamps', pathMatch:'full'},

  { path: 'bootcamps', component: BootcampsComponent, data: { titulo: 'Bootcamps' } },


]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
