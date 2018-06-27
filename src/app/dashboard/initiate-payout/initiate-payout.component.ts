import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-initiate-payout',
  templateUrl: './initiate-payout.component.html',
  styleUrls: ['./initiate-payout.component.css']
})
export class InitiatePayoutComponent implements OnInit {

  public frm_payout: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.frm_payout = this.formBuilder.group({
      amount: ['', [<any>Validators.required]],
      type: ['', [<any>Validators.required]] 
    });
  }

}
