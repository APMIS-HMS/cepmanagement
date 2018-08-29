import { OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { DataStateService } from '../data-state.service';
import { Component } from "@angular/core";
import { Subscription } from "rxjs";
import { GenericState } from '../../models/generic-state';

@Component({
    selector : 'app-yesno-dialog',
    templateUrl : './yesno-dialog.component.html',
    styleUrls : ['yesno-dialog.component.css']
})

export class YesNoDialogComponent implements OnInit,OnDestroy{
    show : boolean = false;
    dialogSubscription : Subscription;

    constructor(private dataState : DataStateService){}

    ngOnInit() {
        this.dialogSubscription = this.dataState.stateObservable.subscribe( (state : GenericState) => {
            console.log(this.show = state.show);
        })
    }
    ngOnDestroy() {
        this.dialogSubscription.unsubscribe();
    }

}