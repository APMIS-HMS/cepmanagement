import { SocketService } from '../../feathers/feathers.service';
import { Injectable, OnInit } from '@angular/core';

@Injectable()
export class CustomService implements OnInit {

    public _socket;
    public _rest;
    constructor(private socketService: SocketService) {
    }

    getEntries(name) {
        this._socket = this.socketService.getService(name);
        return this._socket.find();
    }

    getIndexofObjectInArray(items, query): number {
        for (let i = 0; i < items.length; i++) {
            if (items[i]._id === query) { return i; } else {

            }
        }
    }

    ngOnInit() {

    }
}
