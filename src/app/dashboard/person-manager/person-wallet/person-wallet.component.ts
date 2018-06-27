import { Component, OnInit } from '@angular/core';
declare var $;

@Component({
  selector: 'app-person-wallet',
  templateUrl: './person-wallet.component.html',
  styleUrls: ['./person-wallet.component.css', '../../facility-manager/facility-manager.component.css']
})
export class PersonWalletComponent implements OnInit {

  constructor() { }
   
  ngOnInit() {
  }

  fundwallet_click(){
    $('#fundwallet').modal('show');  
  }

}
