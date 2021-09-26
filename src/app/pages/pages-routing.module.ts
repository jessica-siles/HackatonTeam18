import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/guards/auth.guard';

import { BootcampsComponent } from './components/bootcamps/bootcamps.component';
import { PagesComponent } from './components/pages/pages.component';


const routes:Routes = [
  {
    path: '',
    component: PagesComponent,
    canActivate: [AuthGuard],
    children:[       
      {
        path: 'bootcamps',
        component: BootcampsComponent,
      }
    ]
  },
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
