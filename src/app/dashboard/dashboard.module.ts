import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ContentDashboardComponent } from './components/content-dashboard/content-dashboard.component';
import { DashboardSubscriptionsComponent } from './components/dashboard-subscriptions/dashboard-subscriptions.component';
import { DashboardInscriptionsComponent } from './components/dashboard-inscriptions/dashboard-inscriptions.component';
import { DashboardLogsComponent } from './components/dashboard-logs/dashboard-logs.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll'
import { NgxSpinnerModule } from 'ngx-spinner'

import { SharedModule } from '../shared/shared.module';
import { DashboardBootcampsEmpresaComponent } from './components/dashboard-bootcamps-empresa/dashboard-bootcamps-empresa.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [

    ContentDashboardComponent,
    DashboardSubscriptionsComponent,
    DashboardInscriptionsComponent,
    DashboardLogsComponent,
    DashboardBootcampsEmpresaComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    InfiniteScrollModule,
    NgxSpinnerModule,
    SharedModule,
    HttpClientModule
  ],
  exports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
