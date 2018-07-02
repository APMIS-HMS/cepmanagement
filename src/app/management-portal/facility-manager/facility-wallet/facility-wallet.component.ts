import { Component, OnInit } from '@angular/core';
declare var $;

@Component({
  selector: 'app-facility-wallet',
  templateUrl: './facility-wallet.component.html',
  styleUrls: ['./facility-wallet.component.css', '../facility-manager.component.css']
})
export class FacilityWalletComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  fundwallet_click(){
    $('#fundwallet').modal('show');  
  }

}
