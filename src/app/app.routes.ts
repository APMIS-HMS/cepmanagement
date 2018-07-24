import { DashboardComponent } from './dashboard/dashboard.component';
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AuthComponent} from './auth/auth.component';
import { ProfessionComponent } from './management-portal/profession/profession.component';
import { AddProfessionComponent } from './management-portal/profession/add-profession/add-profession.component';
import { ProfessionCaderComponent } from './management-portal/profession/profession-cader/profession-cader.component';
import { TitleComponent } from './management-portal/title/title.component';
import { CountryComponent } from './management-portal/country/country.component';
import { StatesComponent } from './management-portal/country/states/states.component';
import { LgComponent } from './management-portal/country/states/lg/lg.component'; 
import { FacilityManagerComponent } from './management-portal/facility-manager/facility-manager.component';
import { PersonManagerComponent } from './management-portal/person-manager/person-manager.component';
import { PersonsComponent } from './management-portal/person-manager/persons/persons.component';
import { PersonComponent } from './management-portal/person-manager/person/person.component';
import { FacilitiesComponent } from './management-portal/facility-manager/facilities/facilities.component';
import { FacilityComponent } from './management-portal/facility-manager/facility/facility.component';
import { FacilityPayoutComponent } from './management-portal/facility-payout/facility-payout.component';
import { ManagementPortalComponent } from './management-portal/management-portal.component';
import { DashboardStatsComponent } from './dashboard/dashboard-stats/dashboard-stats.component';

const appRoutes: Routes = [
    {path: '', redirectTo: 'auth', pathMatch: 'full'},
    {path: 'auth', component : AuthComponent},

    {
      path: 'app', component : DashboardComponent,
      children : [ 
        { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
        // { path: 'user-panel', loadChildren: () => UserPanelModule, },
        { path : 'management-portal' , loadChildren : 'app/management-portal/management-portal.module#ManagementPortalModule'},
        //{path : 'management-portal', loadChildren : () => ManagementPortalModule},
        { path: 'dashboard', component : DashboardStatsComponent }
        
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
