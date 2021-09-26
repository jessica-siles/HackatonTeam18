import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/guards/auth.guard';
import { NopagefoundComponent } from '../core/components/nopagefound/nopagefound.component';

import { PagesComponent } from './pages.component';


const routes:Routes = [
  {
    path: '',
    component: PagesComponent,
    //canActivate: [AuthGuard],
    children:[  
      {
        path: '',
        redirectTo : 'usuario',
        pathMatch : 'full'
      },     
      {
        path: 'usuario',
        loadChildren: () => import('./components/usuario/usuario.module').then(m => m.UsuarioModule),
      },
      {
        path: 'empresa',
        loadChildren: () => import('./components/empresa/empresa.module').then(m => m.EmpresaModule),
      },
      {
        path: '**',
        component: NopagefoundComponent
      },
      
     
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
