import { Component, OnInit } from '@angular/core';
declare var $;

@Component({
  selector: 'app-facility',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.css', '../facility-manager.component.css']
})
export class FacilityComponent implements OnInit {

  facility_active = true;

  constructor() { }

  ngOnInit() {
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

 