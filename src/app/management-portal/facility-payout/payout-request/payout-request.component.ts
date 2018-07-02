import { Component, OnInit } from '@angular/core';
declare var $;

@Component({
  selector: 'app-payout-request',
  templateUrl: './payout-request.component.html',
  styleUrls: ['./payout-request.component.css', '../../facility-manager/facility-manager.component.css']
})
export class PayoutRequestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  initiatepayout_click(){
    $('#payout').modal('show');  
  }

}
