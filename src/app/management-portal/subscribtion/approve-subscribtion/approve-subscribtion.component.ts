import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-approve-subscribtion',
  templateUrl: './approve-subscribtion.component.html',
  styleUrls: ['./approve-subscribtion.component.css']
})
export class ApproveSubscribtionComponent implements OnInit {

  public frm_payout: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.frm_payout = this.formBuilder.group({
      amount: ['', [<any>Validators.required]],
      type: ['', [<any>Validators.required]] 
    });
  }

}
