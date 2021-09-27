import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '../shared/shared.module';

import { FirebaseService } from '../core/services/firebase.service';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthService } from './services/auth.service';
import { FirestoreService } from '../core/services/firestore.service';
import { RegisterCompleteComponent } from './components/register-complete/register-complete.component';
import { UserService } from '../core/services/user.service';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    RegisterCompleteComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [FirebaseService, AuthService, FirestoreService, UserService]
})
export class AuthModule { }
