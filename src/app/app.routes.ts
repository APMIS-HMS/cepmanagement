import { DashboardComponent } from './dashboard/dashboard.component';
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AuthComponent} from './auth/auth.component';
import { PortalComponent } from './dashboard/portal/portal.component';
import { ReportComponent } from './dashboard/report/report.component';

const appRoutes: Routes = [
    {
      path: '', redirectTo: 'auth', pathMatch: 'full'
    },
    {
      path: 'auth', component : AuthComponent
    },

    {
      path: 'portal', component : DashboardComponent,

      children : [ 
        { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
        { path : 'management-portal' , loadChildren : 'app/management-portal/management-portal.module#ManagementPortalModule'},
        { path: 'dashboard', component : PortalComponent }    
      ]
    },
    {
      path : 'report', component : DashboardComponent,
      
      children : [
        { path : '' , redirectTo: 'dashboard', pathMatch: 'full' },
        { path : 'analytics-portal' , loadChildren : 'app/report-analytics/report-analytics.module#ReportAnalyticsModule'},
        { path : 'dashboard', component : ReportComponent }
      ]
    }
];

@NgModule({
    imports: [
      RouterModule.forRoot(appRoutes)
    ],
    exports: [
      RouterModule
    ]
  })
  export class AppRoutingModule {
  }
