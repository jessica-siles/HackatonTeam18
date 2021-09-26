import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModule } from '../auth/auth.module';

import { NopagefoundComponent } from './components/nopagefound/nopagefound.component';

import { UserService } from './services/user.service';
import { DashboardModule } from '../dashboard/dashboard.module';



@NgModule({
  declarations: [
    NopagefoundComponent
  ],
  imports: [
    CommonModule,
    DashboardModule,
    AuthModule,
  ],
  exports: [
    NopagefoundComponent
  ],
  providers: [UserService]
})
export class CoreModule { }
