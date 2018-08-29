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
    
    dataLoaded : boolean = false;
    isNull : boolean = false;
  
    pageSize = 10;
    pageSizeOptions = [5, 10, 25, 100];
    @ViewChild(MatPaginator) paginator: MatPaginator;
  
    facilities : Facility[];
    filteredFacility : string = '';
    facilitySubscription : Subscription;
    spinnerSubscription : Subscription;
    showSpinner : boolean = false;
    pageEvent : PageEvent;

    constructor(private facilityService : FacilityManagerService, private ref: ChangeDetectorRef,
        private dataShareService : DataShareService,private loaderService : LoaderService,
        private userFacadeService : UserFacadeService) { 
          
        } 

    ngOnInit(){
        this.getFacilities();
        console.log(this.userFacadeService.getUser());
    }
    getFacilities() {
        this.showLoader();
            this.facilityService.findAll().then((payload: any) => {
          this.facilities = payload.data;
          if(this.facilities.length > 0){
            this.dataLoaded = true;
            this.isNull = false;
          }
          this.hideLoader();
            }).catch(error => {
          this.showLoader();
          this.dataLoaded = false;
            });
      }


      private showLoader() : void {
        this.loaderService.show();
        //.loaderService.show();
      };
  
    private hideLoader(): void {
        this.loaderService.hide();
      };
  
    ngOnDestroy(){

    }
}