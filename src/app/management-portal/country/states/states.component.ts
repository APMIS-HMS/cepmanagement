import { GenericService } from './../../../services/global/generic-service';
import { BaseService } from './../../../services/global/base-service';
import { DataShareService } from './../../../shared/datashare.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../../services/management-portal/country.service';
import { State } from '../../../models/state';
import { Country } from '../../../models/country';
// import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Observable, Subscription } from '../../../../../node_modules/rxjs';
import { Title } from '../../../models/title';

declare var $;

@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.css']
})
export class StatesComponent implements OnInit,OnDestroy {
  
  showDetails : boolean = false;
  filteredState : string = '';
  pageName : string = 'State';
  selectedState : any;
  private serviceName = 'countries';
  result : Country;
  timerSubscription : Subscription;
  countryName : string ='';


  

 constructor(public countryService: CountryService, private baseService : BaseService,
  private dataShare : DataShareService,private genericeService : GenericService,
   public router: Router,private route : ActivatedRoute) {

    this.dataShare.emitData(this.serviceName);
    }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.getStatesByCountryId(id);
  }

  getStatesByCountryId(id) {

    this.baseService.get(id,{}).then( (payload ) => {
      this.result = payload.states;
      this.countryName = payload.name;
      this.subscribeToData(id);
      //this.dataLoaded = true;
  
    }).catch(err => {
      //this.dataLoaded = false;
        console.log(err);
    });  
  }

  private subscribeToData(id): void {
    console.log(id);
    this.timerSubscription = Observable.timer(5000).first().subscribe(() => this.getStatesByCountryId(id) );
  }

  onSelect(data){
    if(data){
      this.showDetails = true;
      this.selectedState = data;
    }
    else{
      
    }
  }

  add() 
  {
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
    const newCountry = {
      'name' : name
    };
    // this.countryService.add(newCountry)
    //   .subscribe((res:any) => {
    //     this.countries.push(res);
    //   });
  }
  ngOnDestroy() {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }

}
