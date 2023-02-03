import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalRoutingModule } from './portal-routing.module';
import { AccountsComponent } from './accounts/accounts.component';
import { ChartsComponent } from './charts/charts.component';
import { NotificationComponent } from './notification/notification.component';
import { OverviewComponent } from './overview/overview.component';
import { SettingsComponent } from './settings/settings.component';
import { OrdersComponent } from './orders/orders.component';
import { HelppComponent } from './helpp/helpp.component';


@NgModule({
  declarations: [
    AccountsComponent,
    ChartsComponent,
    NotificationComponent,
    OverviewComponent,
    SettingsComponent,
    OrdersComponent,
    HelppComponent,
  ],
  imports: [
    CommonModule,
    PortalRoutingModule
  ]
})
export class PortalModule { }
