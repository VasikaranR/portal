import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from '../accounts/accounts.component';
import { ChartsComponent } from '../charts/charts.component';
import { ErrorComponent } from '../../users/error/error.component';
import { HelppComponent } from '../helpp/helpp.component';
import { NotificationComponent } from '../notification/notification.component';
import { OrdersComponent } from '../orders/orders.component';
import { OverviewComponent } from '../overview/overview.component';
import { SettingsComponent } from '../settings/settings.component';
import { PortalComponent } from './portal.component';
import { DocsComponent } from '../docs/docs.component';

const routes: Routes = [
  {path:'',
  component:PortalComponent ,
  children:[
   {
    path:'notification',
    component:NotificationComponent
   },
   {path:'help',component:HelppComponent},
   {path:'error',component:ErrorComponent},
   {path:'overview',component:OverviewComponent},
   {path:'settings',component:SettingsComponent},
   {path:'orders',component:OrdersComponent},
   {path:'charts',component:ChartsComponent},
   {path:'accounts',component:AccountsComponent},
   {path:'docs',component:DocsComponent}
  ]}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalRoutingModule { }
