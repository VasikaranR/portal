import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from './accounts/accounts.component';
import { ChartsComponent } from './charts/charts.component';
import { ErrorComponent } from './error/error.component';
import { HelppComponent } from './helpp/helpp.component';
import { NotificationComponent } from './notification/notification.component';
import { OrdersComponent } from './orders/orders.component';
import { OverviewComponent } from './overview/overview.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  {path:'accounts',component:AccountsComponent},
  {path:'charts',component:ChartsComponent},
  {path:'notification',component:NotificationComponent},
  {path:'overview',component:OverviewComponent},
  {path:'settings',component:SettingsComponent},
  {path:'error',component:ErrorComponent},
  {path:'orders',component:OrdersComponent},
  {path:'help',component:HelppComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalRoutingModule { }
