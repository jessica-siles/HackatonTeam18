import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { RegisterCompleteComponent } from './components/register-complete/register-complete.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
    
    { path: 'login', component: LoginComponent },
    {
        path: 'register',
        component: RegisterComponent,
    },
    {
        path: 'confirmation',
        component: RegisterCompleteComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule {}
