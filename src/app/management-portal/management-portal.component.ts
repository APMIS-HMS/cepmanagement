import { Subscription } from 'rxjs/Subscription';
import { DataStateService } from '../shared/data-state.service';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { GenericState } from '../models/generic-state';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-management-portal',
  templateUrl: './management-portal.component.html',
  styleUrls: ['./management-portal.component.css', '../dashboard/dashboard.component.scss']
})
export class ManagementPortalComponent implements OnInit, OnDestroy {

  showModal = false;
  constructor() { 
  }

  ngOnInit() {
  }

ngOnDestroy() {
}

}
