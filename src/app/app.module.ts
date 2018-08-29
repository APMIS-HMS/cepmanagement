import { ExceptionRefinerService } from './services/global/exception-refiner';
import { AppSharedModule } from './app.shared.module';
import { BrowserModule } from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import { UpperCasePipe } from '@angular/common';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { AppRoutingModule } from './app.routes';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpModule } from '@angular/http';
import { ProfessionComponent } from './management-portal/profession/profession.component';
import { AddProfessionComponent } from './management-portal/profession/add-profession/add-profession.component';
import { ProfessionService } from './services/management-portal/profession.service';
import { ProfessionCaderComponent } from './management-portal/profession/profession-cader/profession-cader.component';
import { TitleService } from './services/management-portal/title.service';
import { CountryService } from './services/management-portal/country.service';
import { DashboardStatsComponent } from './dashboard/dashboard-stats/dashboard-stats.component';
import { MyDatePickerModule } from 'mydatepicker';
import { ChartsModule } from 'ng2-charts';
import { SocketService,RestService } from './feathers/feathers.service';
import { LocalStorageModule } from 'angular-2-local-storage';
import { DataShareService } from './shared/datashare.service';
import { LoaderComponent } from './shared/loader/loader.component';
import { LoaderService } from './shared/loader.service';
import { MaterialModule } from './shared/material-design.module';
import { FacilityManagerService } from './services/management-portal/facility-manager-service';
import { PortalComponent } from './dashboard/portal/portal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ExpandMenu } from './directives/expandmenu';
import { UserFacadeService } from './services/user-management/user-facade.service';
import { UserService } from './services/user-management/user.service';
import { HttpClientModule } from '@angular/common/http';
import { GenericService } from './services/global/generic-service';
import { BaseService } from './services/global/base-service';
import { CustomService } from './services/global/custom-service';
import { DataStateService } from'./shared/data-state.service';
import { ReportComponent } from './dashboard/report/report.component';
import { NotificationService } from './services/global/notification.service';



@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    DashboardComponent,
    DashboardStatsComponent,
    LoaderComponent,
    PortalComponent,
    ReportComponent,
    // FacilityFilterPipe,
    ExpandMenu
  ],
  imports: [
    LocalStorageModule.withConfig({
      prefix: 'my-app',
      storageType: 'localStorage'
  }),
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MyDatePickerModule,
    ChartsModule,
    FontAwesomeModule,
    AppSharedModule,
    AppRoutingModule  
  ],
  providers: [
            ProfessionService, TitleService,CountryService,
            SocketService,RestService,
            DataShareService,LoaderService,FacilityManagerService,
            UserService,UserFacadeService,UpperCasePipe,GenericService,CustomService,BaseService,
            DataStateService,NotificationService,ExceptionRefinerService
            // {
            //   provide: ErrorHandler,
            //   useClass: ExceptionRefinerService,
            // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
