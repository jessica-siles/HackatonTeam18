import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { PagesRoutingModule } from './pages-routing.module';

import { BootcampsComponent } from './components/bootcamps/bootcamps.component';
import { PagesComponent } from './components/pages/pages.component';


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
