import { DataShareService } from '../../../shared/datashare.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-facility-item',
  templateUrl: './facility-item.component.html',
  styleUrls: ['./facility-item.component.css','../facility-manager.component.css']
})
export class FacilityItemComponent implements OnInit {

 @Input() facility;

  constructor(private dataShareService : DataShareService) { }

  ngOnInit() {
  }

}
