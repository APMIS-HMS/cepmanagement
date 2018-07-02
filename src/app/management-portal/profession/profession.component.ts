import { Component, OnInit } from '@angular/core';
import { ProfessionService } from '../../services/profession.service';
import { Profession } from '../../models/profession';
import { TitleCasePipe } from '@angular/common';
import { Router } from '@angular/router';
import { Cader } from '../../models/cader';
import { ProfessionCaderComponent } from './profession-cader/profession-cader.component';
declare var $;

@Component({
  selector: 'profession',
  templateUrl: './profession.component.html',
  styleUrls: ['./profession.component.css']
})
export class ProfessionComponent implements OnInit {
  professions: Profession[];
  newCaders: Cader[];
  cader: Cader;

  constructor(public professionService: ProfessionService, public router: Router) { }

  ngOnInit() {
    this.getProfession();
  }

  addProfessionView() {
    $('#add-profession.ui.modal')
    .modal('show', {
      closable : true
    });
  }

  update(profession) {
    this.professions.push(profession);
  }

  getProfession() {
    this.professionService.fetch()
      .subscribe((res:any) => {
        this.professions = res.data;
        console.log(this.professions);
      });
  }

  getProfessionDetails(id) {
    this.router.navigate(['/dashboard/profession', id]);
  }

  edit(id) {
    $('#e' + id).toggleClass('hidden');
    $('#t' + id).toggleClass('hidden');
  }

  more(id) {
    $('#' + id + '.expanded').toggleClass('show');
    console.log($('#' + id + '.expanded'));
    $('#' + id).find('i').toggleClass('down');
    $('#' + id).find('i').toggleClass('up');
  }

  quickEdit(i, id, name) {
    console.log(i);
    console.log($('#icon' + i).removeClass('hidden'));
    this.professionService.quickEdit(id, name)
      .subscribe((res:any) => {
        console.log(res);
        console.log($('#icon' + i).addClass('hidden'));
        this.edit(i);
      });
  }

  addCaders(name) {
    let payload = this.cader;
    payload = {
    'name' : name
    };
    this.newCaders.push(payload);
  }

  delete(profession) {
    const pro = profession;
    $('#deleteModal')
    .modal({
      closable  : false,
      onDeny    : function(){

      },
      onApprove : () => {
        console.log(pro);
        this.deleteProfession(pro);
      }
    })
    .modal('show');
  }

  deleteProfession(profession) {
    this.professionService.delete(profession._id)
    .subscribe((res:any) => {
      this.getProfession();
    });
  }
}
