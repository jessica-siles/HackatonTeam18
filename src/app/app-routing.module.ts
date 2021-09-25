import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { PagesRoutingModule } from './pages/pages.routing';

const routes: Routes = [
  { path: '', redirectTo: '/bootcamps', pathMatch: 'full' },
  {
    path: '**',
    component: NopagefoundComponent
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    PagesRoutingModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
