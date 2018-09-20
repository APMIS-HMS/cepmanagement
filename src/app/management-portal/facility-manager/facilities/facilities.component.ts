import { LoaderService } from '../../../shared/loader.service';
import { DataShareService } from '../../../shared/datashare.service';
import { Component, OnInit,ChangeDetectorRef, OnDestroy, ViewChild } from '@angular/core';
import { FacilityManagerService } from '../../../services/management-portal/facility-manager-service';
import { Facility } from '../../../models/facility';
import { Subscription } from 'rxjs/Subscription';
import { MatPaginator, PageEvent } from '@angular/material';
declare var $;

@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.css', '../facility-manager.component.css']
})
export class FacilitiesComponent implements OnInit, OnDestroy {

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
  private dataShareService : DataShareService,private loaderService : LoaderService) { 
    
  } 

  ngOnInit () {
    this.getFacilities();
    console.log('facilities component');
  }

  getFacilities() {
    this.showLoader();
		this.facilityService.findAll().then((payload: any) => {
      this.facilities = payload.data;
      console.log(payload.data);
      if(this.facilities.length > 0){
        this.dataLoaded = true;
        this.isNull = false;
      }
      this.hideLoader();
		}).catch(error => {
      this.showLoader();
      this.dataLoaded = false;
		});
  };

  onPaginateChange(event){
    const startIndex = event.pageIndex * event.pageSize;
    
  }
  // onPaginateChange(event) {
  //   const startIndex = event.pageIndex * event.pageSize;
  //   this.operateBeneficiaries = JSON.parse(JSON.stringify(this.beneficiaries));
  //   this.filteredBeneficiaries = JSON.parse(JSON.stringify(this.operateBeneficiaries.splice(startIndex, this.paginator.pageSize)));
  // }
  // passFacilityObject(data: any){
  //   this.dataShareService.sendDataToComponent(data);
  // }


  private showLoader(): void {
      this.loaderService.show();
    }

  private hideLoader(): void {
      this.loaderService.hide();
  }

    newFacility_click() {
      $('#newFacility').modal('show');
    }

  public ngOnDestroy() {

    //this.facilitySubscription.unsubscribe();
  }

}
