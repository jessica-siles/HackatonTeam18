import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NopagefoundComponent } from './core/components/nopagefound/nopagefound.component';

const routes: Routes = [
  { 
    path: '',
    loadChildren: './pages/pages.module#PagesModule'
  },
  {
    path: '**',
    component: NopagefoundComponent
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
