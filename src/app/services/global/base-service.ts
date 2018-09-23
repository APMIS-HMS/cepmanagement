import { PortalUserService } from './../user-management/portal-user.service';
import { DataShareService } from '../../shared/datashare.service';
import { Injectable, OnDestroy, Injector } from '@angular/core';
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
export class BaseService implements OnDestroy {

    public _socket;
    public _localSocket;
    public _rest;
    serviceSubscription:  Subscription;
    localServiceSubscription: Subscription;
    serviceName;
    localServiceName;
    entryObject: {
      name: String
    };
    notify: Response;
    entryList: any = [];
    objList: any = [];
    private dataSubject = new Subject<any>();
    dataObserver = this.dataSubject.asObservable();

    private entriesChanged = new Subject<any>();
    entryObserver = this.entriesChanged.asObservable();

    constructor(dataShare: DataShareService, protected socketService: SocketService,
        protected restService: RestService, protected customService: CustomService,
        protected injector: Injector, protected response: ExceptionRefinerService,
      private localSoecket: SocketService) {

        this.serviceSubscription = dataShare.currentData.subscribe(data => {
            console.log(this.serviceName = data);
            this._socket = this.socketService.getService(this.serviceName);
        });
        this._localSocket = this.localSoecket.getLocalService('users');

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

      findByApmisId(query: any){
        console.log(query);
        return this._localSocket.find(query);
    }

      find(query: any) {
        return this._socket.find(query);
      }
      get(_id: any, query: any) {
        return this._socket.get(_id, query);
      }

      update(entry: any) {
        this._socket.update(entry._id, entry);
        this.getEntries();
      }

      currentUserDetailsById(appId) {
        return this._localSocket.find();

      }

      objectArrayUpdate(query: string, entry: any) {
        this.get(query, {})
        .then(payload => {
          const country = payload;
          const states = country.states;
          const stateIndex = this.customService.getIndexofObjectInArray(states, entry._id);
          const state = country.states.find(x => x._id === entry._id);
          state.name = entry.name;
          country.states[stateIndex] = state ;
          this.update(country);
          this.notifySuccess(entry.name, 'updated');
        })
        .catch(err => {
          this.response.handleError(err);
        });
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
        });
      }

      customCreate(data: CustomEntry) {
        this.entryObject = {
            name : data.name
        };
        this._socket.create(this.entryObject)
        .then(payload => {
          this.getEntries();
        },
        this.notifySuccess(data.name, 'added')
       )
        .catch(err => {
          this.response.handleError(err);
        });
      }

      private notifySuccess(data, messageType) {
        this.notify = {
          code : 200,
          data : {
            isSuccess : true,
            message : `${data} successfully ${messageType}.`
          }
        };
        this.response.handleSuccess(this.notify);
      }

      private getEntries() {
        this.findAll().then( (payload: any) => {
          this.entryList = payload.data;
          this.entriesChanged.next(this.entryList);
        });
      }
      ngOnDestroy() {
      if (this.serviceSubscription) { this.serviceSubscription.unsubscribe(); }
    }
}
