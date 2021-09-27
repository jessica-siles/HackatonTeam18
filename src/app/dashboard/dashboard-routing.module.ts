import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentDashboardComponent } from './components/content-dashboard/content-dashboard.component';
import { DashboardInscriptionsComponent } from './components/dashboard-inscriptions/dashboard-inscriptions.component';
import { DashboardLogsComponent } from './components/dashboard-logs/dashboard-logs.component';
import { DashboardSubscriptionsComponent } from './components/dashboard-subscriptions/dashboard-subscriptions.component';

const routes: Routes = [
  {
    path: '',
    component: ContentDashboardComponent,
    children: [
      {
        path: '',
        redirectTo: 'subscriptions',
        pathMatch: 'full'
      },
      {
        path: 'inscriptions',
        component: DashboardInscriptionsComponent,
      },
      {
        path: 'logs',
        component: DashboardLogsComponent,
      },
      {
        path: 'subscriptions',
        component: DashboardSubscriptionsComponent,
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
