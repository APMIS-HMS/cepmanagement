import { DataShareService } from '../../shared/datashare.service';
import { Injectable,OnDestroy, Injector } from "@angular/core";
import { CONSTANTS } from './global.service';
import { HttpClient } from '@angular/common/http';
import { SocketService, RestService } from '../../feathers/feathers.service';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Observer } from 'rxjs/Observer';
import { Subscription } from 'rxjs';
import { CustomService } from './custom-service';
import { reject } from 'q';
import { CustomEntry } from '../../models/generic';
import { ExceptionRefinerService } from './exception-refiner';
import { Response } from '../../models/error';


@Injectable()
export class BaseService  implements OnDestroy {

    public _socket;
    public _rest;
    serviceSubscription :  Subscription;
    serviceName;
    entryObject : {
      name : string
    }; 
    notify : Response;
    entryList : any = [];
    objList : any = [];
  
    private dataSubject = new Subject<any>();
    dataObserver = this.dataSubject.asObservable();

    private entriesChanged = new Subject<any>();
    entryObserver = this.entriesChanged.asObservable();

    constructor(dataShare : DataShareService,protected socketService : SocketService,
        protected restService : RestService,protected customService : CustomService,
        protected injector : Injector,protected response : ExceptionRefinerService) {
            
        this.serviceSubscription = dataShare.currentData.subscribe(data => {
            this.serviceName = data;
            this._socket = this.socketService.getService(this.serviceName);   
        });       
    }
  
     findAllAsObservable() {

      // this._socket.find( (data : any) => {
        
      //   this.dataSubject.next(data);
      // })
      // this.findAll().then( (payload : any) => {
      //   this.objList = payload.data;
      //   this.dataSubject.next(this.objList);
      // })
      }

      findAll() {
        return this._socket.find(); 
      }

      find(query: any) {
        return this._socket.find(query);
      }
      get(_id : any, query: any) {
        return this._socket.get(_id, query);
      }

      update(entry: any) {
        this._socket.update(entry._id, entry);
        this.getEntries();
      }

      patch(entry: any) {
          return this._socket.patch(entry._id, entry)
          .then(payload => {
            this.entriesChanged.next(payload);
          })
          .catch(err => {
            this.response.handleError(err);
          });
      }

      remove(entry: any, query: any) {
        return this._socket.remove(entry._id, entry)
        .then(payload => {
          this.getEntries();
        })
        .catch(err => {
          this.response.handleError(err);
        })
      }

      customCreate(data : CustomEntry){
        this.entryObject = {
            name : data.name  
        } 
        this._socket.create(this.entryObject)
        .then(payload => {
          this.getEntries();
        },
        this.notifySuccess(data.name)
       )
        .catch(err => {
          this.response.handleError(err);
        })
      };

      private notifySuccess(data) {
        this.notify = {
          code : 200,
          data : {
            isSuccess : true,
            message : `${data} successfully added.`
          }
        }
        this.response.handleSuccess(this.notify);
      }

      private getEntries(){
        this.findAll().then( (payload : any) => {
          this.entryList = payload.data;
          this.entriesChanged.next(this.entryList);
        })
      }
      ngOnDestroy(){
        this.serviceSubscription.unsubscribe();
    }

}