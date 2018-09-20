import { LocalSocketService } from './../../feathers/local-feathers.service';
import { Injectable } from '../../../../node_modules/@angular/core';

@Injectable()
export class PortalUserService {
public _socket;
constructor(private portalSocket: LocalSocketService) {

    this._socket = this.portalSocket.getService('users');
    }
    logOut() {
        this.portalSocket.logOut();
    }
    login(query: any) {
        return this.portalSocket.loginIntoApp(query);
    }
    find(query: any) {
        return this._socket.find(query);
    }

    findByApmisId(query) {
        return this._socket.find(query);
    }
    findAll() {
        return this._socket.find();
    }
    get(id: string, query: any) {
        return this._socket.get(id, query);
    }
    create(user: any) {
        console.log(user);
        return this._socket.create(user);
    }
    update(entry: any) {
        this._socket.update(entry._id, entry);
      }
      patch(entry: any) {
          entry.loginCount = 1;
          return this._socket.patch(entry._id, entry);
      }

}
