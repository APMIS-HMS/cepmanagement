import { AppSharedModule } from '../../app.shared.module';
import { ManagementPortalSharedModule } from '../management-portal-shared.module';
import { FacilityManagerRouteModule } from './facility-manager.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FacilityManagerComponent } from './facility-manager.component';
import { FacilityComponent } from './facility/facility.component';
import { FacilityWalletComponent } from './facility-wallet/facility-wallet.component';
import { FacilityItemComponent } from './facility-item/facility-item.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
// import { FacilityFilterPipe } from '../../shared/pipes/facility-filter.pipe';
// import { FundWalletComponent } from '../fund-wallet/fund-wallet.component';
// import { PersonManagerComponent } from '../person-manager/person-manager.component';

@NgModule({
    declarations : [
        FacilitiesComponent,
        FacilityComponent,
        FacilityItemComponent,
        FacilityManagerComponent,
        FacilityWalletComponent
    ],
    imports : [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ManagementPortalSharedModule,
        AppSharedModule,
        FacilityManagerRouteModule
    ],
    exports : [
        
    ]
})

export class FacilityManagerModule{

}