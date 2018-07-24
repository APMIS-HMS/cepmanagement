import { Facility } from '../../../models/facility';
import { FacilityManagerService } from '../../../services/facility-manager-service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
declare var $;

@Component({
  selector: 'app-facility',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.css', '../facility-manager.component.css']
})
export class FacilityComponent implements OnInit {

  facility : Facility;
  facility_active = true;
  facilityId : string ='';

  constructor(private facilityService: FacilityManagerService, private route : ActivatedRoute) { 
    this.facilityId = this.route.snapshot.params['id'];
  }

  ngOnInit() {
      console.log('i was called');
  }

  getFacilityById(facilityId){
    //this.facility = this.facilityService.get(this.facilityId,)
  }
  onSearch(){
    $('.ui.search').search({
      apiSettings: {
        url: '//api.github.com/search/repositories?q={query}'
      },
      fields: {
        results : 'items',
        title   : 'name',
        url     : 'html_url'
      },
      minCharacters : 3
    });
  }

  onActivate(){
    $('#confirm').modal('show');
  } 
  
  onApprove(){
    this.facility_active = !this.facility_active;
    $('#confirm').modal('hide');
  } 

}

 