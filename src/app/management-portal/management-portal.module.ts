import { UserManagementModule } from './../user-management/user-management.module';
import { State } from './../models/state';
import { ManagementPortalSharedModule } from './management-portal-shared.module';
import { PersonComponent } from './person-manager/person/person.component';
import { AddProfessionComponent } from './profession/add-profession/add-profession.component';
import { ProfessionCaderComponent } from './profession/profession-cader/profession-cader.component';
import { ManagementPortalComponent } from './management-portal.component';
import { PayoutRequestComponent } from './facility-payout/payout-request/payout-request.component';
import { FacilityPayoutComponent } from './facility-payout/facility-payout.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ManagementPortalRouteModule } from './management-portal.routes';
import { SummaryComponent } from './summary/summary.component';
import { HomeComponent } from './home/home.component';
import { DeleteComponent } from './delete/delete.component';
import { StatesComponent } from './country/states/states.component';
import { CountryComponent } from './country/country.component';
import { AddComponent } from './add/add.component';
import { NgModule } from "@angular/core";
import { LgComponent } from './country/states/lg/lg.component';
import { InitiatePayoutComponent } from './initiate-payout/initiate-payout.component';
import { TitleComponent } from './title/title.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PayoutHistoryComponent } from './facility-payout/payout-history/payout-history.component';
import { ProfessionComponent } from './profession/profession.component';
import { MaterialModule } from '../shared/material-design.module';
import { AppSharedModule } from '../app.shared.module';
import { CountryDetailsComponent } from './country/country-details/country-details.component';
import { TitleDetialsComponent } from './title/title-details/title-details.component';
import { StateDetailsComponent } from './country/states/state-details/state-details.component';

@NgModule({
    declarations : [
        AddComponent,
        CountryComponent,
        StatesComponent,
        LgComponent,
        DeleteComponent,
        HomeComponent,
        InitiatePayoutComponent,
        SummaryComponent,
        TitleComponent,
        InitiatePayoutComponent,
        FacilityPayoutComponent,
        PayoutRequestComponent,
        PayoutHistoryComponent,
        ManagementPortalComponent,
        ProfessionComponent,
        ProfessionCaderComponent,
        AddProfessionComponent,
        CountryDetailsComponent,
        TitleDetialsComponent,
        StateDetailsComponent
    ],
    imports : [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        AppSharedModule,
        ManagementPortalRouteModule
    ]
})

export class ManagementPortalModule{
    
}