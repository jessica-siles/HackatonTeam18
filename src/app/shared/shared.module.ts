import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadingBtnDirective } from './directives/loading-btn.directive';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LoadingBtnDirective,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    LoadingBtnDirective,
    NavbarComponent
  ]
})
export class SharedModule { }
