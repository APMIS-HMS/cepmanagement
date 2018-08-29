import { GenericState } from '../../models/generic-state';
import { Subscription } from 'rxjs/Subscription';
import { DataStateService } from '../../shared/data-state.service';
import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
var $;

@Component({
  selector: 'delete-modal',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent  {
  modal_on = false;

  constructor(private dataState : DataStateService) { 
  }

  no_click() {
    //this.dataState.activeState();
    // this.closeModal.emit(true);
  }
  ngOnInit() {

  }
}
