import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/guards/auth.guard';

import { PagesComponent } from './components/pages/pages.component';


const routes:Routes = [
  {
    path: '',
    component: PagesComponent,
    //canActivate: [AuthGuard],
    children:[       
      {
        path: 'usuario',
        loadChildren: () => import('./components/usuario/usuario.module').then(m => m.UsuarioModule),
      },
      {
        path: 'empresa',
        loadChildren: () => import('./components/empresa/empresa.module').then(m => m.EmpresaModule),
      },
      {
        path: '',
        redirectTo : 'usuario',
        pathMatch : 'full'
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
