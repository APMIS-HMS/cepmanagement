import { Component, OnInit } from '@angular/core';
declare var $;

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  user_type = 'Admin';
  //or user_type = 'User';
  person_active = true;

  constructor() { }

  ngOnInit() {
  }

  onSearch(){
    $('.ui.search').search({ 
      apiSettings: {
        // url: '//api.github.com/search/repositories?q={query}'
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
    this.person_active = !this.person_active;
    $('#confirm').modal('hide');
  } 

}
