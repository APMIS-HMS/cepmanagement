import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {ProfessionComponent} from '../profession.component';
import { Profession } from '../../../models/profession';
import { Cader } from '../../../models/cader';
import { Error } from '../../../models/error';
import { ProfessionService } from '../../../services/profession.service';
declare var $;

@Component({
  selector: 'add-profession',
  templateUrl: './add-profession.component.html',
  styleUrls: ['./add-profession.component.css']
})


export class AddProfessionComponent implements OnInit {
@Output() updateProfession = new EventEmitter<Profession>();

  profession: Profession = {
    name : '',
    caders : []
  };
  cader: Cader;
  caders: Cader[] = [];
  error: Error = {
    message : '',
    isSet : false
  };
  editCader: String;
  name: String = '';

  constructor(public professionService: ProfessionService) { }

  ngOnInit() {
  }

  addCaders(name) {
    let newCader = this.cader;
    newCader = {'name' : name};
    this.caders.push(newCader);
    this.editCader = '';
  }

  deleteCader(cader) {
    this.caders = this.caders.filter(e => e !== cader);
  }


  addProfession() {
    if (this.name.length > 2) {
      if (this.caders.length > 0) {
        const newProfession = this.profession;
        newProfession.name = this.name;
        newProfession.caders = this.caders;
        this.professionService.add(newProfession)
          .subscribe((res:any) => {
            console.log(res);
            this.updateProfession.emit(res);
            this.caders = [];
            this.name = '';
            $('#add-profession.ui.modal')
            .modal('hide');
          });
      } else {
        this.error.message = 'Please add a cader first';
        this.error.isSet = true;
      }
    } else {
      this.error.message = 'Please enter a profession name first';
      this.error.isSet = true;
    }
  }

}
