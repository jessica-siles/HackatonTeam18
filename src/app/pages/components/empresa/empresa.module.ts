import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpresaRoutingModule } from './empresa-routing.module';
import { BootcampsComponent } from './bootcamps/bootcamps.component';
import { MisBootcampsComponent } from './mis-bootcamps/mis-bootcamps.component';


@NgModule({
  declarations: [
    BootcampsComponent,
    MisBootcampsComponent
  ],
  imports: [
    CommonModule,
    EmpresaRoutingModule
  ]
})
export class EmpresaModule { }
