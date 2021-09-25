import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { BootcampsComponent } from './bootcamps/bootcamps.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    PagesComponent,
    BootcampsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    PagesRoutingModule
  ],
  exports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
