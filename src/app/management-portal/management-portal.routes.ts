import { FacilityPayoutComponent } from './facility-payout/facility-payout.component';
import { LgComponent } from './country/states/lg/lg.component';
import { StatesComponent } from './country/states/states.component';
import { CountryComponent } from './country/country.component';
import { TitleComponent } from './title/title.component';
import { ProfessionCaderComponent } from './profession/profession-cader/profession-cader.component';
import { ProfessionComponent } from './profession/profession.component';
import { PersonComponent } from './person-manager/person/person.component';
import { PersonsComponent } from './person-manager/persons/persons.component';
import { PersonManagerComponent } from './person-manager/person-manager.component';
import { FacilityComponent } from './facility-manager/facility/facility.component';
import { FacilitiesComponent } from './facility-manager/facilities/facilities.component';
import { FacilityManagerComponent } from './facility-manager/facility-manager.component';
import { ManagementPortalComponent } from './management-portal.component';
import { NgModule } from "../../../node_modules/@angular/core";
import { Routes, RouterModule } from '@angular/router';

const managementportalroutes : Routes = [
  
    { path: '', component : ManagementPortalComponent,
    children : [
      {
        path : 'facilities', component : FacilityManagerComponent, 
        children:[
          { path: '', component : FacilitiesComponent },
          { path: ':id', component : FacilityComponent }
        ]
      },
      {
        path : 'person', component : PersonManagerComponent, 
        children:[
          {path: '', redirectTo: 'list', pathMatch: 'full'},
          {path: 'list', component : PersonsComponent },
          {path: 'detail', component : PersonComponent }
        ]
      },
      { path : 'profession', component : ProfessionComponent },
      { path: 'profession/:id', component: ProfessionCaderComponent },
      { path: 'title', component: TitleComponent },
      { path: 'country', component: CountryComponent },
      { path: 'country/:id', component: StatesComponent },
      { path: 'country/:id/:id2', component: LgComponent },
        { path: 'payout', component: FacilityPayoutComponent }
    ]
  }
]

@NgModule({
    imports : [
        RouterModule.forChild(managementportalroutes)
    ],
    exports : [
        RouterModule
    ]
})
export class ManagementPortalRouteModule{}