import { Component, OnInit } from '@angular/core';
declare var $;

@Component({
  selector: 'app-person-manager',
  templateUrl: './person-manager.component.html',
  styleUrls: ['./person-manager.component.css', '../facility-manager/facility-manager.component.css']
})
export class PersonManagerComponent implements OnInit {

  user_type = 'Admin';
  //or user_type = 'User';

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
