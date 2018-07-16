import { Component, OnInit } from '@angular/core';
declare var $;

@Component({
  selector: 'app-deactivated-subscribtion',
  templateUrl: './deactivated-subscribtion.component.html',
  styleUrls: ['./deactivated-subscribtion.component.css', '../../facility-manager/facility-manager.component.css']
})
export class DeactivatedSubscribtionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  approveSubscribtion_click(){
    $('#approve').modal('show');  
  }

}
