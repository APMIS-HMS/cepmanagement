import { Subscription } from 'rxjs/Subscription';
import { Observer } from 'rxjs/Observer';
import { Observable } from 'rxjs/Observable';
import { Facility } from '../models/facility';
import { SocketService, RestService } from '../feathers/feathers.service';
import { Injectable, OnInit } from "@angular/core";
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import 'rxjs/Rx';

@Injectable()
export class FacilityManagerService implements OnInit{

    public _socket;
    public _rest;

    facilityActivated = new Subject();
    constructor(socketService : SocketService, private restService : RestService){

        this._socket = socketService.getService('facilities');
        //this._rest = restService.getService('facilities');

    }
    find(query: any) {
        return this._socket.find(query);
      }
      
    findAll(){
        return this._socket.find();
    }
    get(id: string, query: any) {
        return this._socket.get(id, query);
      }
    // public customSub = Observable.create((observer : Observer<any>) => {
            
    //     observer.next(this._socket.find());

    // }); 
    ngOnInit(){
        
    }
};