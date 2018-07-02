import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { AppRoutingModule } from './app.routes';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SummaryComponent } from './dashboard/summary/summary.component';
import { ProfessionComponent } from './dashboard/profession/profession.component';
import { AddProfessionComponent } from './dashboard/profession/add-profession/add-profession.component';
import { ProfessionService } from './services/profession.service';
import { HttpClientModule } from '@angular/common/http';
import { ProfessionCaderComponent } from './dashboard/profession/profession-cader/profession-cader.component';
import { TitleComponent } from './dashboard/title/title.component';
import { TitleService } from './services/title.service';
import { DeleteComponent } from './dashboard/delete/delete.component';
import { AddComponent } from './dashboard/add/add.component';
import { CountryComponent } from './dashboard/country/country.component';
import { CountryService } from './services/country.service';
import { StatesComponent } from './dashboard/country/states/states.component';
import { LgComponent } from './dashboard/country/states/lg/lg.component';
import { HomeComponent } from './dashboard/home/home.component';
import { DashboardStatsComponent } from './dashboard/dashboard-stats/dashboard-stats.component';
import { MyDatePickerModule } from 'mydatepicker';
import { ChartsModule } from 'ng2-charts';
import { FacilityManagerComponent } from './dashboard/facility-manager/facility-manager.component';
import { FacilityWalletComponent } from './dashboard/facility-manager/facility-wallet/facility-wallet.component';
import { FundWalletComponent } from './dashboard/fund-wallet/fund-wallet.component';
import { InitiatePayoutComponent } from './dashboard/initiate-payout/initiate-payout.component';
import { PersonManagerComponent } from './dashboard/person-manager/person-manager.component';
import { PersonWalletComponent } from './dashboard/person-manager/person-wallet/person-wallet.component';
import { PersonsComponent } from './dashboard/person-manager/persons/persons.component';
import { PersonComponent } from './dashboard/person-manager/person/person.component';
import { FacilitiesComponent } from './dashboard/facility-manager/facilities/facilities.component';
import { FacilityComponent } from './dashboard/facility-manager/facility/facility.component';
import { FacilityPayoutComponent } from './dashboard/facility-payout/facility-payout.component';
import { PayoutRequestComponent } from './dashboard/facility-payout/payout-request/payout-request.component';
import { PayoutHistoryComponent } from './dashboard/facility-payout/payout-history/payout-history.component';
import { ManagementPortalComponent } from './management-portal/management-portal.component';
import { FacilityService } from './dashboard/facility-manager/facility.service';
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
    ManagementPortalComponent
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
  providers: [ProfessionService, TitleService, CountryService,FacilityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
