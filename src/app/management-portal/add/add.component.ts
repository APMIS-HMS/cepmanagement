import { Response } from './../../models/error';
import { BaseService } from '../../services/global/base-service';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { NewEntry } from '../../models/generic';
import { DataShareService } from '../../shared/datashare.service';
import { GenericService } from '../../services/global/generic-service';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { MatSnackBar } from '@angular/material';
import { NotificationService } from '../../services/global/notification.service';


@Component({
  selector: 'add-modal',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit,OnDestroy {

  @Input() pageTitle : string;

  srvName : string = '';
  frm_newEntry : FormGroup;
  serviceNameSubscription : Subscription;
  newEntry : NewEntry = {
    serviceName : '',
    name : ''
  };
  notifySubscription : Subscription;
  responseObj : Response


  constructor(private dataShareService : DataShareService, private genericService : GenericService, 
  private formBuilder : FormBuilder, private baseService : BaseService,
  private notificationService : NotificationService,public snackBar: MatSnackBar) { 

    this.serviceNameSubscription = this.dataShareService.componentData.subscribe( data => {
      this.srvName = data;
      console.log(this.srvName);
    })

    this.notifySubscription =  this.notificationService.notificationObserver.subscribe( data => {
      this.responseObj = data;
      if(this.responseObj.data.isSuccess)
      {
        this.snackBar.open(this.responseObj.data.message, 'infomation', {
          duration: 3000,
          verticalPosition: 'bottom',
          horizontalPosition: 'left',

          });
      }else {
        this.snackBar.open(this.responseObj.data.message, 'error', {
          duration: 3000,
          verticalPosition: 'bottom',
          horizontalPosition: 'left',

          });
      }

    });
  //   this.notifySubscription =  this.notificationService.notificationObserver.subscribe( data => {
  //     this.errorObj = data;
  //     this.snackBar.open(this.errorObj.data.message, 'error', {
  //         duration: 2000,
  //       });
      
  // });
    }

    ngOnInit(){

      //this. clearModalEntry();
      this.frm_newEntry = this.formBuilder.group({
        name: ['', [<any>Validators.required]]
      });
  
      this.frm_newEntry.valueChanges.subscribe(payload => {
        if (this.frm_newEntry.dirty) {
          //this.mainErr = true;
        }
      });
  }

  clearModalEntry(){
    //this.frm_newEntry.controls['name'].setValue('');
  };

  onAddEntry(valid){
  if(valid){
    this.newEntry = {
      serviceName : this.srvName,
      name : this.frm_newEntry.controls['name'].value
    };
    this.baseService.customCreate(this.newEntry);

  }
  }

  ngOnDestroy(){
    this.serviceNameSubscription.unsubscribe();
  }

}
