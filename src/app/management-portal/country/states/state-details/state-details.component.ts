import { MatSnackBar } from '@angular/material';
import { BaseService } from './../../../../services/global/base-service';
import { FormGroup } from '@angular/forms';
import { OnDestroy } from '@angular/core';
import { Component, Input, OnInit } from "../../../../../../node_modules/@angular/core";
import { State } from "../../../../models/state";
import { Subscription } from '../../../../../../node_modules/rxjs';
import { Response } from '../../../../models/error';
import { DataShareService } from '../../../../shared/datashare.service';
import { NotificationService } from '../../../../services/global/notification.service';

@Component({
    selector : 'app-state-details',
    templateUrl : './state-details.component.html',
    styleUrls : ['./state-details.component.html']
})
export class StateDetailsComponent implements OnInit,OnDestroy{

 @Input('state-details') state : State;
 frm_state : FormGroup;
 private serviceName = 'states';
 stateObj : State;
 notifySubscription : Subscription;
 errorObj : Response;

 constructor( private baseService : BaseService,private dataShare : DataShareService,
    private notificationService : NotificationService,public snackBar: MatSnackBar){
        this.dataShare.emitData(this.serviceName);

        this.notifySubscription =  this.notificationService.notificationObserver.subscribe( data => {
            this.errorObj = data;
            this.snackBar.open(this.errorObj.data.message, 'error', {
                duration: 2000,
                verticalPosition: 'bottom',
                horizontalPosition: 'left',

              });
        });
    }
    onEdit(data){
        this.stateObj = data;
        this.baseService.patch(this.stateObj);
    }
    onDelete(data){
        this.stateObj = data
        this.baseService.remove(this.stateObj,'');
    }
    ngOnInit() {

    }

    ngOnDestroy() {
        if(this.notifySubscription){
            this.notifySubscription.unsubscribe();
        }
    }

}