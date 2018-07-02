import { Component, OnInit } from '@angular/core';
import { Title } from '../../models/title';
import { TitleService } from '../../services/title.service';
declare var $;

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {
  titles: Title[];
  title: Title;

  constructor(public titleService: TitleService) { }

  ngOnInit() {
    this.getTitle();
  }

  getTitle() {
    this.titleService.fetch()
      .subscribe((res:any) => {
        this.titles = res.data;
        console.log(this.titles);
      });
  }

  more(id) {
    $('#' + id + '.expanded').toggleClass('show');
    console.log($('#' + id + '.expanded'));
    $('#' + id).find('i').toggleClass('down');
    $('#' + id).find('i').toggleClass('up');
  }

  add() {
    $('#addModal')
    .modal({
      closable  : true,
      onApprove : () => {
        this.addTitle($('#add-content').val());
      }
    })
    .modal('show');
  }

  addTitle(name) {
    const newTitle = {
      'name' : name
    };
    this.titleService.add(newTitle)
      .subscribe((res:any) => {
        this.titles.push(res);
      });
  }

  edit(id) {
    $('#e' + id).toggleClass('hidden');
    $('#t' + id).toggleClass('hidden');
  }

  quickEdit(i, id, name) {
    $('#icon' + i).removeClass('hidden');
    this.titleService.quickEdit(id, name)
      .subscribe((res:any) => {
        $('#icon' + i).addClass('hidden');
        this.edit(i);
      });
  }

  delete(title) {
    $('#deleteModal')
    .modal({
      closable  : false,
      onDeny    : function(){

      },
      onApprove : () => {
        this.deleteTitle(title);
      }
    })
    .modal('show');
  }

  deleteTitle(title) {
    this.titleService.delete(title._id)
      .subscribe((res:any) => {
        this.titles = this.titles.filter(e => e !== title);
      });
  }

}
