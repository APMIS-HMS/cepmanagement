import { Component, OnInit } from '@angular/core';
declare var $;

@Component({
  selector: 'app-pending-subscribtion',
  templateUrl: './pending-subscribtion.component.html',
  styleUrls: ['./pending-subscribtion.component.css', '../../facility-manager/facility-manager.component.css']
})
export class PendingSubscribtionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  approveSubscribtion_click(){
    $('#approve').modal('show');  
  }

}
