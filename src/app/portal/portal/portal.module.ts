import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalRoutingModule } from './portal-routing.module';
import { AccountsComponent } from '../accounts/accounts.component';
import { ChartsComponent } from '../charts/charts.component';
import { NotificationComponent } from '../notification/notification.component';
import { OverviewComponent } from '../overview/overview.component';
import { SettingsComponent } from '../settings/settings.component';
import { OrdersComponent } from '../orders/orders.component';
import { HelppComponent } from '../helpp/helpp.component';
import { SearchComponent } from '../search/search.component';
import { HeaderComponent } from '../header/header.component';
import { SideToggleComponent } from '../side-toggle/side-toggle.component';
import { FooterComponent } from '../footer/footer.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { PortalComponent } from './portal.component';



@NgModule({
  declarations: [
    AccountsComponent,
    ChartsComponent,
    NotificationComponent,
    OverviewComponent,
    SettingsComponent,
    OrdersComponent,
    HelppComponent,
    SearchComponent,
    HeaderComponent,
    SideToggleComponent,
    FooterComponent,
    SidebarComponent,
    PortalComponent,

  ],
  imports: [
    CommonModule,
    PortalRoutingModule
  ],
  exports:[
  ]
})
export class PortalModule { }
