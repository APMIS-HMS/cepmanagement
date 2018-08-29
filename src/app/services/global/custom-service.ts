import { SocketService } from '../../feathers/feathers.service';
import { Injectable, OnInit } from '@angular/core';

@Injectable()
export class CustomService implements OnInit {

    public _socket;
    public _rest;
    constructor(private socketService : SocketService){
        //this._socket = this.socketService.getService('titles');     
    }

    getEntries(name) {
        this._socket = this.socketService.getService(name);
        return this._socket.find();
    };

    customF

    ngOnInit(){

    }
}