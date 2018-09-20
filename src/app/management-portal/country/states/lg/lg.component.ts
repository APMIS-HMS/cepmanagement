import { DataShareService } from './../../../../shared/datashare.service';
import { BaseService } from './../../../../services/global/base-service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../../../services/management-portal/country.service';
import { Country } from '../../../../models/country';
import { State } from '../../../../models/state';
import { timingSafeEqual } from 'crypto';
declare var $;

@Component({
  selector: 'app-lg',
  templateUrl: './lg.component.html',
  styleUrls: ['./lg.component.css']
})
export class LgComponent implements OnInit {

  country: Country;
  result: any;
  stateName : string = '';
  private countryId : string = '';
  private stateId : string = '';
  filteredLg : string = '';
  pageName : string = 'LGA';
  showDetails : boolean = false;
  selectedLga : any;
  private serviceName = 'countries';

  constructor( public location: Location, public route: ActivatedRoute, 
    public countryService: CountryService,private baseService : BaseService,
  private dataShare : DataShareService ) { 

      this.dataShare.emitData(this.serviceName);
    }

  ngOnInit() {
    this.countryId = this.route.snapshot.params['id'];
    this.stateId = this.route.snapshot.params['id2'];
    this.getLGByStateId(this.countryId,this.stateId);
  }


  // init() {
  //   this.activeRoute.params.subscribe(params => {
  //     this.getLGs(params['id'], params['id2']);
  //      });
  // }
  onSelect(data){
    this.showDetails = true;
    this.selectedLga = data;

  }
  getLGByStateId(country,state){
    this.baseService.get(country,{}).then( (payload ) => {
      let states = payload.states.find(x => x._id === state);
      this.result = states.lgs;
      console.log(this.result);
      //console.log(this.result);
      this.stateName = states.name;
      //this.subscribeToData(id);
      //this.dataLoaded = true;
  
    }).catch(err => {
      //this.dataLoaded = false;
        console.log(err);
    }); 
  }
  add(){
    
  }
  // getLGs(id, id2) {
  //   this.countryService.getState(id)
  //     .subscribe((res:any) => {
  //       this.country = res;
  //       this.state = res.states.filter((obj) => {
  //                     return obj._id === id2;
  //                   })[0];
  //     console.log(this.state);
  //     });
  // }

  // add() {
  //   $('#addModal')
  //   .modal({
  //     closable  : true,
  //     onApprove : () => {
  //       this.addLG($('#add-content').val());
  //     }
  //   })
  //   .modal('show');
  // }

  // addLG(name) {
  //   const newLG = {
  //     'name' : name
  //   };
  //   this.country.states = this.country.states.filter(e => e !== this.state);
  //   this.state.lgs.push(newLG);
  //   this.country.states.push(this.state);
  //   this.countryService.saveState(this.country._id, this.country.states)
  //     .subscribe();
  // }


  more(id) {
    $('#' + id + '.expanded').toggleClass('show');
    console.log($('#' + id + '.expanded'));
    $('#' + id).find('i').toggleClass('down');
    $('#' + id).find('i').toggleClass('up');
  }

  edit(id) {
    $('#e' + id).toggleClass('hidden');
    $('#t' + id).toggleClass('hidden');
  }

  // quickEdit(i, id) {
  //   console.log($('#icon' + i).removeClass('hidden'));
  //   this.country.states = this.country.states.filter(e => e._id !== this.state._id);
  //   this.country.states.push(this.state);
  //   console.log(this.country.states);
  //   this.countryService.saveState(id, this.country.states)
  //     .subscribe((res:any) => {
  //       $('#icon' + i).addClass('hidden');
  //       this.edit(i);
  //     });
  // }


  // delete(lg) {
  //   $('#deleteModal')
  //   .modal({
  //     closable  : true,
  //     onDeny    : function(){

  //     },
  //     onApprove : () => {
  //       this.deleteLG(lg);
  //     }
  //   })
  //   .modal('show');
  // }

  // deleteLG(lg) {
  //   this.country.states = this.country.states.filter(e => e !== this.state);
  //   this.state.lgs = this.state.lgs.filter(e => e !== lg);
  //   this.country.states.push(this.state);
  //   this.countryService.saveState(this.country._id, this.country.states)
  //     .subscribe(
  //       (res:any) => this.init() , err => this.init()
  //     );
  // }

  back() {
    this.location.back();
  }
}
