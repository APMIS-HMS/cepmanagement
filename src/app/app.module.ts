import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { AppRoutingModule } from './app.routes';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SummaryComponent } from './management-portal/summary/summary.component';
import { ProfessionComponent } from './management-portal/profession/profession.component';
import { AddProfessionComponent } from './management-portal/profession/add-profession/add-profession.component';
import { ProfessionService } from './services/profession.service';
import { HttpClientModule } from '@angular/common/http';
import { ProfessionCaderComponent } from './management-portal/profession/profession-cader/profession-cader.component';
import { TitleComponent } from './management-portal/title/title.component';
import { TitleService } from './services/title.service';
import { DeleteComponent } from './management-portal/delete/delete.component';
import { AddComponent } from './management-portal/add/add.component';
import { CountryComponent } from './management-portal/country/country.component';
import { CountryService } from './services/country.service';
import { StatesComponent } from './management-portal/country/states/states.component';
import { LgComponent } from './management-portal/country/states/lg/lg.component';
import { HomeComponent } from './management-portal/home/home.component';
import { DashboardStatsComponent } from './dashboard/dashboard-stats/dashboard-stats.component';
import { MyDatePickerModule } from 'mydatepicker';
import { ChartsModule } from 'ng2-charts';
import { FacilityManagerComponent } from './management-portal/facility-manager/facility-manager.component';
import { FacilityWalletComponent } from './management-portal/facility-manager/facility-wallet/facility-wallet.component';
import { FundWalletComponent } from './management-portal/fund-wallet/fund-wallet.component';
import { InitiatePayoutComponent } from './management-portal/initiate-payout/initiate-payout.component';
import { PersonManagerComponent } from './management-portal/person-manager/person-manager.component';
import { PersonWalletComponent } from './management-portal/person-manager/person-wallet/person-wallet.component';
import { PersonsComponent } from './management-portal/person-manager/persons/persons.component';
import { PersonComponent } from './management-portal/person-manager/person/person.component';
import { FacilitiesComponent } from './management-portal/facility-manager/facilities/facilities.component';
import { FacilityComponent } from './management-portal/facility-manager/facility/facility.component';
import { FacilityPayoutComponent } from './management-portal/facility-payout/facility-payout.component';
import { PayoutRequestComponent } from './management-portal/facility-payout/payout-request/payout-request.component';
import { PayoutHistoryComponent } from './management-portal/facility-payout/payout-history/payout-history.component';
import { ManagementPortalComponent } from './management-portal/management-portal.component';
import { SubscribtionComponent } from './management-portal/subscribtion/subscribtion.component';
import { PendingSubscribtionComponent } from './management-portal/subscribtion/pending-subscribtion/pending-subscribtion.component';
import { DeactivatedSubscribtionComponent } from './management-portal/subscribtion/deactivated-subscribtion/deactivated-subscribtion.component';
import { ActiveSubscribtionComponent } from './management-portal/subscribtion/active-subscribtion/active-subscribtion.component';
import { ApproveSubscribtionComponent } from './management-portal/subscribtion/approve-subscribtion/approve-subscribtion.component';
@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    DashboardComponent,
    SummaryComponent,
    ProfessionComponent,
    AddProfessionComponent,
    ProfessionCaderComponent,
    TitleComponent,
    DeleteComponent,
    AddComponent,
    CountryComponent,
    StatesComponent,
    LgComponent,
    HomeComponent,
    DashboardStatsComponent,
    FacilityManagerComponent,
    FacilityWalletComponent,
    FundWalletComponent,
    InitiatePayoutComponent,
    PersonManagerComponent,
    PersonWalletComponent,
    PersonComponent,
    PersonsComponent,
    FacilitiesComponent,
    FacilityComponent,
    FacilityPayoutComponent,
    PayoutRequestComponent,
    PayoutHistoryComponent,
    ManagementPortalComponent,
    SubscribtionComponent,
    PendingSubscribtionComponent,
    DeactivatedSubscribtionComponent,
    ActiveSubscribtionComponent,
    ApproveSubscribtionComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MyDatePickerModule,
    ChartsModule
  ],
  providers: [ProfessionService, TitleService, CountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
