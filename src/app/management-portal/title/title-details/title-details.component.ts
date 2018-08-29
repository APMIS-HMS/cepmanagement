import { Subscription } from 'rxjs';
import { DataShareService } from './../../../shared/datashare.service';
import { Component, Input, OnInit, OnDestroy } from "../../../../../node_modules/@angular/core";
import { Title } from "../../../models/title";
import { FormGroup } from "../../../../../node_modules/@angular/forms";
import { BaseService } from "../../../services/global/base-service";
import { NotificationService } from '../../../services/global/notification.service';
import { MatSnackBar } from '../../../../../node_modules/@angular/material';
import { Response } from '../../../models/error';

@Component({
    selector : 'app-title-details',
    templateUrl : './title-details.component.html',
    styleUrls : ['./title-details.component.css']
})
export  class TitleDetialsComponent implements OnInit, OnDestroy {

    @Input('title-details') title : Title;
    notifySubscription : Subscription;
    private serviceName = 'titles';
    errorObj : Response;
    titleObj : Title;

    constructor(private baseService : BaseService,private dataShare : DataShareService,
        private notificationService : NotificationService,public snackBar: MatSnackBar) {

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

    onEdit(data) {
        this.titleObj = data;
        this.baseService.patch(this.titleObj);
    }
    onDelete(data){
        this.titleObj = data
        this.baseService.remove(this.titleObj,'');
    }
    ngOnInit(){

    }
    ngOnDestroy(){
        if(this.notifySubscription){
            this.notifySubscription.unsubscribe();
        }
    }
}