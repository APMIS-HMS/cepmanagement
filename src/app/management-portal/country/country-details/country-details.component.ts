import { DataShareService } from '../../../shared/datashare.service';
import { BaseService } from '../../../services/global/base-service';
import { FormGroup } from '@angular/forms';
import { Component, Input, OnInit,OnDestroy } from "@angular/core";
import { Country } from '../../../models/country';
import { Subscription } from 'rxjs';
import { NotificationService } from '../../../services/global/notification.service';
import { Response } from '../../../models/error';
import { MatSnackBar,MatSnackBarConfig } from '@angular/material';

@Component({
    selector : 'app-country-details',
    templateUrl : './country-details.component.html',
    styleUrls : ['./country-details.component.css']
})
export class CountryDetailsComponent implements OnInit,OnDestroy {

    @Input('country-details') country;
    frm_country : FormGroup;
    private serviceName = 'countries';
    countryObj : Country;
    notifySubscription : Subscription;
    errorObj : Response;

    constructor(private baseService : BaseService,private dataShare : DataShareService,
        private notificationService : NotificationService,public snackBar: MatSnackBar) {
        this.dataShare.emitData(this.serviceName);

        this.notifySubscription =  this.notificationService.notificationObserver.subscribe( data => {
            this.errorObj = data;
            this.snackBar.open(this.errorObj.data.message, 'error', {
                duration: 2000,
                verticalPosition: 'top',
                horizontalPosition: 'center',

              });
        });
    }
    onEdit(data) {
        this.countryObj = data;
        this.baseService.patch(this.countryObj);
    }
    onDelete(data) {
        this.countryObj = data
        this.baseService.remove(this.countryObj,'');
    }
    
    ngOnInit() {
    }
    ngOnDestroy() {
        if(this.notifySubscription){
            this.notifySubscription.unsubscribe();
        }

    }
}