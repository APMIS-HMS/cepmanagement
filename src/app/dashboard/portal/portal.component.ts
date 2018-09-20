import { DashboardService } from './../../shared/dashboard.service';
import { Component, OnInit, OnDestroy,ViewChild, ChangeDetectorRef } from "@angular/core";
import { LoaderService } from '../../shared/loader.service';
import { DataShareService } from '../../shared/datashare.service';
import { FacilityManagerService } from '../../services/management-portal/facility-manager-service';
import { Facility } from '../../models/facility';
import { Subscription } from 'rxjs/Subscription';
import { MatPaginator, PageEvent } from '@angular/material';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { UserFacadeService } from '../../services/user-management/user-facade.service';

@Component({
    selector : 'app-portal',
    templateUrl : './portal.component.html',
    styleUrls : ['./portal.component.scss']
})
export class PortalComponent implements OnInit, OnDestroy {

    faCoffee = faCoffee;
    dataLoaded: Boolean = false;
    dashboardStats = {};
    constructor(private facilityService: FacilityManagerService, private ref: ChangeDetectorRef,
        private dataShareService: DataShareService, private loaderService: LoaderService,
        private dashboard: DashboardService) {
        }

    ngOnInit() {
    }

    getDashboardStatistics() {
       this.dashboard.dashboardStat().then( data => {
          this.dashboardStats = data;
       });
    }

    ngOnDestroy() {

    }
}