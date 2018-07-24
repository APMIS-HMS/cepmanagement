import { BrowserModule } from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { AppRoutingModule } from './app.routes';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfessionComponent } from './management-portal/profession/profession.component';
import { AddProfessionComponent } from './management-portal/profession/add-profession/add-profession.component';
import { ProfessionService } from './services/profession.service';
import { ProfessionCaderComponent } from './management-portal/profession/profession-cader/profession-cader.component';
import { TitleService } from './services/title.service';
import { CountryService } from './services/country.service';
import { DashboardStatsComponent } from './dashboard/dashboard-stats/dashboard-stats.component';
import { MyDatePickerModule } from 'mydatepicker';
import { ChartsModule } from 'ng2-charts';
import { SocketService,RestService } from './feathers/feathers.service';
import { LocalStorageModule } from 'angular-2-local-storage';
import { DataShareService } from './shared/datashare.service';
import { LoaderComponent } from './shared/loader/loader.component';
import { LoaderService } from './shared/loader.service';
import { MaterialModule } from './shared/material-design.module';
import { FacilityManagerService } from './services/facility-manager-service';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    DashboardComponent,
    ProfessionComponent,
    AddProfessionComponent,
    ProfessionCaderComponent,
    DashboardStatsComponent,
    LoaderComponent
  ],
  imports: [
    LocalStorageModule.withConfig({
      prefix: 'my-app',
      storageType: 'localStorage'
  }),
    BrowserModule,
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MyDatePickerModule,
    ChartsModule,
    AppRoutingModule,
    
  ],
  providers: [
            ProfessionService, TitleService,CountryService,
            SocketService,RestService,
            DataShareService,LoaderService,FacilityManagerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
