import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';

@NgModule({
  declarations: [
    PagesComponent
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
