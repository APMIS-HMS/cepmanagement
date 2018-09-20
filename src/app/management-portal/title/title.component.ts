import { DataStateService } from '../../shared/data-state.service';
import { BaseService } from '../../services/global/base-service';
import { DataShareService } from '../../shared/datashare.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '../../models/title';
import { Subscription } from 'rxjs/Subscription';
import { GenericService } from '../../services/global/generic-service';
import { CustomService } from '../../services/global/custom-service';
import { CONSTANTS } from '../../services/global/global.service';

declare var $;

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit, OnDestroy {
  titles: Title[];
  filteredTitle = '';
  showDetails = false;
  selectedTitle: any;
  title: Title;
  dataLoaded = false;
  serviceToLoad = '';
  private titlesChanged: Subscription;
  private serviceName = 'titles';
  pageName = 'Title';
  expanded = false;
  showDown = true;
  toggle = {};
  e = {};
  showModal = false;

  constructor(private dataShare: DataShareService, private customService: CustomService,
    private genericService: GenericService, private baseService: BaseService,
    private dataState: DataStateService) {

    this.dataShare.emitData(this.serviceName);
    this.getTitles();
    }

  // private alertServiceName(){
  //   this.dataShare.updateData(this.serviceName);
  // }


  getTitles() {
      this.baseService.findAll().then( (payload: any) => {
      this.titles = payload.data;
      this.dataLoaded = true;

    }).catch(err => {
      this.dataLoaded = false;
      console.log(err);
    });

    this.titlesChanged = this.baseService.entryObserver.subscribe( data => {
      this.titles = data;
    });
  }

  onSelect(data) {
    if (data) {
      this.showDetails = true;
      this.selectedTitle = data;
    } else {
    }
  }
  ngOnDestroy() {
    this.titlesChanged.unsubscribe();
  }

  ngOnInit() {
  }

  more(id) {
    $('#' + id + '.expanded').toggleClass('show');
    console.log($('#' + id + '.expanded'));
    $('#' + id).find('i').toggleClass('down');
    $('#' + id).find('i').toggleClass('up');
  }

  showMore(id) {
    this.toggle[id] = !this.toggle[id];
    $('#' + id + '.expanded').toggleClass('show');
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
    // this.titleService.add(newTitle)
    //   .subscribe((res:any) => {
    //     this.titles.push(res);
    //   });
  }

  edit(id) {
    this.e[id] = !this.e[id];
    // $('#e' + id).toggleClass('hidden');
    // $('#t' + id).toggleClass('hidden');
  }

  quickEdit(i, id, name) {
    $('#icon' + i).removeClass('hidden');
    this.e[id] = !this.e[id];
      this.title = {
        _id : id,
        name : name
      };
      this.baseService.patch(this.title);
  }

  private showConfirmModal(): void {
    this.showModal = !this.showModal;
    this.dataState.activeState(this.showModal);
  }

  closeModal() {
    $('deleteModal')
    .modal('close');
    console.log('closing modal now');
  }

  delete(title, id) {
    this.showConfirmModal();

    // $('#deleteModal')
    // .modal({
    //   closable  : true,
    //   onApprove : () => {
    //     this.addTitle($('#add-content').val());
    //   }
    // })
    // .modal('show');
    // this.showModal = !this.showModal;
    // console.log(this.showModal);

    // this.modalState.activeState();


    // $('#deleteModal')
    // .modal({
    //   closable  : false,
    //   onDeny    : function(){
    //     $('deleteModal').modal('hide');
    //   },
    //   onApprove : () => {
    //     this.deleteTitle(title);
    //   }
    // })
    // .modal('show');
  }

  deleteTitle(title) {
    // this.titleService.delete(title._id)
    //   .subscribe((res:any) => {
    //     this.titles = this.titles.filter(e => e !== title);
    //   });
  }

}
