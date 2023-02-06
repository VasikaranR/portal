import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  
    {
    path:'login',component:LoginComponent,
    },
    {
    path:'reset-password',component:ResetPasswordComponent,
    },
    {
    path:'sign-up',component:SignUpComponent,
    },
    {
    path:'404-error',component:ErrorComponent
    }
   
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
