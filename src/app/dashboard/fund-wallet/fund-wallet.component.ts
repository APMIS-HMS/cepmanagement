import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-fund-wallet',
  templateUrl: './fund-wallet.component.html',
  styleUrls: ['./fund-wallet.component.css']
})
export class FundWalletComponent implements OnInit {

  public frm_fundwallet: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.frm_fundwallet = this.formBuilder.group({
      amount: ['', [<any>Validators.required]],
      type: ['', [<any>Validators.required]] 
    });
  }

}
