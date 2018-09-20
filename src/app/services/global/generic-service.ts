import { TitleService } from '../management-portal/title.service';
import { NewEntry } from '../../models/generic';
import { DataShareService } from '../../shared/datashare.service';
import { OnInit } from '@angular/core';
import { SocketService, RestService } from '../../feathers/feathers.service';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import { CustomService } from './custom-service';

@Injectable()
export class GenericService {
    public _socket;
    public _rest;
    entryList: any = [];
    serviceName;
    private entriesChanged = new Subject<any>();
    entryObserver = this.entriesChanged.asObservable();

    entryServiceSubscription: Subscription;

    entryObject: {
        name: String
    };

    constructor(socketService: SocketService, private restService: RestService,
    private dataShareService: DataShareService, private titleService: TitleService,
    private customService: CustomService ) {
        this.entryServiceSubscription = this.dataShareService.currentData.subscribe(data => {
            this.serviceName = data;
            if (this.serviceName) {
                this._socket = socketService.getService(this.serviceName);
            }
        });
    }

    findAll() {
        return this._socket.find();
    }
    getAllEntries() {
        this.entryList = this._socket.find();
        return this.entryList;
      }

    addEntry(data: NewEntry) {
        this.entryObject = {
            name : data.name
        };
        this._socket.create(this.entryObject);
        this.customService.getEntries(data.serviceName).then((payload: any) => {
            this.entryList = payload.data;
            this.entriesChanged.next(this.entryList);
        });
    }
}
