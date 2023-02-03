import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardService as AuthGuard } from './authguard.service';

const routes: Routes = [
  { 
    path: 'portal',
    loadChildren: () => 
    import('../portal/portal.module').then(m => m.PortalModule),
    canActivate:[AuthGuard]
  },
  {
    path:'users',
    loadChildren: () =>
    import('../users/users.module').then(m => m.UsersModule),
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
