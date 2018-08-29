import { FacilityComponent } from './facility/facility.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { FacilityManagerComponent } from './facility-manager.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';


const facilityRoutes : Routes = [
    { path : '', component : FacilityManagerComponent,
    children:[
        { path: '', component : FacilitiesComponent },
        { path: ':id', component : FacilityComponent }
      ]
    },
    {}
]
@NgModule({
    imports : [
        RouterModule.forChild(facilityRoutes)
    ],
    exports : [
        RouterModule
    ]
})
export class FacilityManagerRouteModule{

}