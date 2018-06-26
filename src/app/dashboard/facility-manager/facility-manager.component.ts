import { Component, OnInit } from '@angular/core';
declare var $;

@Component({
  selector: 'app-facility-manager',
  templateUrl: './facility-manager.component.html',
  styleUrls: ['./facility-manager.component.css']
})
export class FacilityManagerComponent implements OnInit {

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

}
