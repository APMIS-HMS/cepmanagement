import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../../services/country.service';
import { State } from '../../../models/state';
import { Country } from '../../../models/country';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

declare var $;

@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.css']
})
export class StatesComponent implements OnInit {
  country: Country;

 constructor( public activeRoute: ActivatedRoute,
              public countryService: CountryService,
              public location: Location,
              public router: Router) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      console.log(params);
      this.getStates(params['id']);
       });
  }

  back() {
    this.location.back();
  }

  getStates(id) {
    this.countryService.getState(id)
      .subscribe(
        (res:any) => {
          this.country = res;
        }
      );
  }

  add() {
    $('#addModal')
    .modal({
      closable  : true,
      onApprove : () => {
        this.addState($('#add-content').val());
      }
    })
    .modal('show');
  }

  addState(name) {
     const newState = {
      'name' : name ,
      'lgs' : [],
      'cities' : []
    };
    this.country.states.push(newState);
    this.countryService.saveState(this.country._id, this.country.states)
      .subscribe((res:any) => {
        this.getStates(this.country._id);
      }, err => {
        console.log(err);
      }
    );
  }

  more(id) {
    $('#' + id + '.expanded').toggleClass('show');
    $('#' + id).find('i').toggleClass('down');
    $('#' + id).find('i').toggleClass('up');
  }

  edit(id) {
    $('#e' + id).toggleClass('hidden');
    $('#t' + id).toggleClass('hidden');
  }

  quickEdit(i, id) {
    console.log($('#icon' + i).removeClass('hidden'));
    this.countryService.saveState(id, this.country.states)
      .subscribe((res:any) => {
        $('#icon' + i).addClass('hidden');
        this.edit(i);
      });
  }

  viewLg(id, id2) {
    this.router.navigate(['/dashboard/country', id, id2]);
  }

  delete(state) {
    $('#deleteModal')
    .modal({
      closable  : false,
      onDeny    : function(){

      },
      onApprove : () => {
        this.deleteState(state);
      }
    })
    .modal('show');
  }

  deleteState(state) {
    this.country.states = this.country.states.filter(e => e !== state);
    this.countryService.saveState(this.country._id, this.country.states)
      .subscribe();
  }

}
