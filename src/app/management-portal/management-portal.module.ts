import { AddProfessionComponent } from './profession/add-profession/add-profession.component';
import { ProfessionCaderComponent } from './profession/profession-cader/profession-cader.component';
import { FacilityManagerComponent } from './facility-manager/facility-manager.component';
import { ManagementPortalComponent } from './management-portal.component';
import { PayoutRequestComponent } from './facility-payout/payout-request/payout-request.component';
import { FacilityPayoutComponent } from './facility-payout/facility-payout.component';
import { FacilityWalletComponent } from './facility-manager/facility-wallet/facility-wallet.component';
import { FacilityItemComponent } from './facility-manager/facility-item/facility-item.component';
import { FacilityComponent } from './facility-manager/facility/facility.component';
import { FacilitiesComponent } from './facility-manager/facilities/facilities.component';
import { PersonsComponent } from './person-manager/persons/persons.component';
import { PersonComponent } from './person-manager/person/person.component';
import { PersonManagerComponent } from './person-manager/person-manager.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FacilityFilterPipe } from './../shared/pipes/facility-filter.pipe';
import { ManagementPortalRouteModule } from './management-portal.routes';
import { SummaryComponent } from './summary/summary.component';
import { HomeComponent } from './home/home.component';
import { FundWalletComponent } from './fund-wallet/fund-wallet.component';
import { DeleteComponent } from './delete/delete.component';
import { StatesComponent } from './country/states/states.component';
import { CountryComponent } from './country/country.component';
import { AddComponent } from './add/add.component';
import { NgModule } from "../../../node_modules/@angular/core";
import { LgComponent } from './country/states/lg/lg.component';
import { InitiatePayoutComponent } from './initiate-payout/initiate-payout.component';
import { TitleComponent } from './title/title.component';
import { FormsModule, ReactiveFormsModule } from '../../../node_modules/@angular/forms';
import { PersonWalletComponent } from './person-manager/person-wallet/person-wallet.component';
import { SpinnerComponent } from '../shared/spinner/spinner.component';
import { PayoutHistoryComponent } from './facility-payout/payout-history/payout-history.component';
import { ProfessionComponent } from './profession/profession.component';


@NgModule({
    declarations : [
        AddComponent,
        CountryComponent,
        StatesComponent,
        LgComponent,
        DeleteComponent,
        FundWalletComponent,
        HomeComponent,
        InitiatePayoutComponent,
        SummaryComponent,
        TitleComponent,
        FacilityFilterPipe,
        PersonManagerComponent,
        PersonComponent,
        PersonWalletComponent,
        PersonsComponent,
        FacilitiesComponent,
        FacilityComponent,
        FacilityItemComponent,
        FacilityWalletComponent,
        SpinnerComponent,
        InitiatePayoutComponent,
        FacilityPayoutComponent,
        PayoutRequestComponent,
        PayoutHistoryComponent,
        ManagementPortalComponent,
        FacilityManagerComponent,
        ProfessionComponent,
        ProfessionCaderComponent,
        AddProfessionComponent
    ],
    imports : [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ManagementPortalRouteModule
    ]
})

export class ManagementPortalModule{
    
}