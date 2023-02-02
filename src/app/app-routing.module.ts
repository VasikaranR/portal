import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from './accounts/accounts.component';
import { ChartsComponent } from './charts/charts.component';
import { NotificationComponent } from './notification/notification.component';
import { OverviewComponent } from './overview/overview.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  {path:'reset',component:ResetPasswordComponent},
  {path:'account',component:AccountsComponent},
  {path:'notification',component:NotificationComponent},
  {path:'settings',component:SettingsComponent},
  {path:'overview',component:OverviewComponent},
  {path:'charts',component:ChartsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
