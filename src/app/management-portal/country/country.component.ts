import { Observable } from 'rxjs/Observable';
import { GenericService } from '../../services/global/generic-service';
import { BaseService } from '../../services/global/base-service';
import { DataShareService } from '../../shared/datashare.service';
import { Component, OnInit,OnDestroy } from '@angular/core';
import { CountryService } from '../../services/management-portal/country.service';
import { Country } from '../../models/country';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

declare var $;

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit,OnDestroy {

  countries: Country[];
  pageName : string = 'Country';
  private serviceName = 'countries';

  private timerSubscription : Subscription;
  
  dataLoaded : boolean = false;
  selectedCountry : any;
  showDetails : boolean = false;
  filteredCountry : string = ''; 
  stateCount  : number = 0;

  constructor(public countryService: CountryService, private baseService : BaseService,
    private dataShare : DataShareService,private genericeService : GenericService,
     public router: Router) { 

      this.dataShare.emitData(this.serviceName);
     }

     ngOnInit() {
      this.getCountries();
    }

  getCountries() {
    this.baseService.findAll().then( (payload : any) => {
      this.countries = payload.data;
      console.log(this.countries);
     // this.subscribeToData();
      //this.dataLoaded = true;
  
    }).catch(err => {
      //this.dataLoaded = false;
        console.log(err);
    });  
  }

  private subscribeToData(): void {
    this.timerSubscription = Observable.timer(5000).first().subscribe(() => this.getCountries());
  }

  onSelect(data){
    if(data){
      this.showDetails = true;
      this.selectedCountry = data;
    }
    else{
      
    }
  }
  onView(id : string){
    console.log(id);
    this.router.navigate(['portal/management-portal/countries',id])
  }
 
  add() 
  {
    $('#addModal')
    .modal({
      closable  : true,
      onApprove : () => {
        this.addCountry($('#add-content').val());
      }
    })
    .modal('show');
  }

  addCountry(name) {
    const newCountry = {
      'name' : name
    };
    this.countryService.add(newCountry)
      .subscribe((res:any) => {
        this.countries.push(res);
      });
  }


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

  quickEdit(i, id, name) {
    console.log($('#icon' + i).removeClass('hidden'));
    this.countryService.quickEdit(id, name)
      .subscribe((res:any) => {
        $('#icon' + i).addClass('hidden');
        this.edit(i);
      });
  }

  delete(country) {
    $('#deleteModal')
    .modal({
      closable  : true,
      onDeny    : function(){

      },
      onApprove : () => {
        this.deleteCountry(country);
      }
    })
    .modal('show');
  }

  deleteCountry(country) {
    this.countryService.delete(country._id)
      .subscribe((res:any) => {
        this.countries = this.countries.filter(e => e !== country);
      });
  }

  viewStates(id) {
    this.router.navigate(['/dashboard/country', id]);
  }

  ngOnDestroy(){
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }
}
 