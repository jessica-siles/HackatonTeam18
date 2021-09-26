import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';

import { AuthModule } from '../auth/auth.module';
import { PagesModule } from '../pages/pages.module';

import { NopagefoundComponent } from './components/nopagefound/nopagefound.component';

import { environment } from '../../environments/environment';
import { UserService } from './services/user.service';



@NgModule({
  declarations: [
    NopagefoundComponent
  ],
  imports: [
    CommonModule,
    PagesModule,
    AuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
  ],
  exports: [
    NopagefoundComponent
  ],
  providers: [UserService]
})
export class CoreModule { }
