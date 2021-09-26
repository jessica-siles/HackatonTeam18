import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ContentDashboardComponent } from './components/content-dashboard/content-dashboard.component';
import { DashboardSubscriptionsComponent } from './components/dashboard-subscriptions/dashboard-subscriptions.component';
import { DashboardInscriptionsComponent } from './components/dashboard-inscriptions/dashboard-inscriptions.component';
import { DashboardLogsComponent } from './components/dashboard-logs/dashboard-logs.component';


@NgModule({
  declarations: [

    ContentDashboardComponent,
       DashboardSubscriptionsComponent,
       DashboardInscriptionsComponent,
       DashboardLogsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  exports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
