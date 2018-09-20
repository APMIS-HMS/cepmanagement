import { FacilityPayoutComponent } from './facility-payout/facility-payout.component';
import { LgComponent } from './country/states/lg/lg.component';
import { StatesComponent } from './country/states/states.component';
import { CountryComponent } from './country/country.component';
import { TitleComponent } from './title/title.component';
import { ProfessionCaderComponent } from './profession/profession-cader/profession-cader.component';
import { ProfessionComponent } from './profession/profession.component';
import { ManagementPortalComponent } from './management-portal.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

const managementportalroutes: Routes = [
    
    { path: '', component : ManagementPortalComponent,
    children : [
      {
         path : 'facilities' , loadChildren : 'app/management-portal/facility-manager/facility-manager.module#FacilityManagerModule'
      },
      {
         path : 'person' , loadChildren : 'app/management-portal/person-manager/person-manager.module#PersonManagerModule'
      },
      { path : 'profession', component : ProfessionComponent },
      { path: 'profession/:id', component: ProfessionCaderComponent },
      { path: 'titles', component: TitleComponent },
      { path: 'countries', component: CountryComponent },
      {path : 'countries/:id' , component : StatesComponent},
      { path: 'countries/:id/state/:id2', component: LgComponent },
    //   { path: 'country/:id/:id2', component: LgComponent },
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