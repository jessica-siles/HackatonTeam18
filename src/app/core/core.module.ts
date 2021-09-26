import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModule } from '../auth/auth.module';
import { PagesModule } from '../pages/pages.module';

import { NopagefoundComponent } from './components/nopagefound/nopagefound.component';

import { UserService } from './services/user.service';



@NgModule({
  declarations: [
    NopagefoundComponent
  ],
  imports: [
    CommonModule,
    PagesModule,
    AuthModule,
  ],
  exports: [
    NopagefoundComponent
  ],
  providers: [UserService]
})
export class CoreModule { }
