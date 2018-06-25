import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
declare var $;

@Component({
  selector: 'app-dashboard-stats',
  templateUrl: './dashboard-stats.component.html',
  styleUrls: ['./dashboard-stats.component.scss']
})
export class DashboardStatsComponent implements OnInit {

  filterBy = new FormControl();

  constructor() { }

  ngOnInit() {
  }

  onFilter(){
    $('.ui.search')
    .search({
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
