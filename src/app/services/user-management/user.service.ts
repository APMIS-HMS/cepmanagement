import { Injectable } from '@angular/core';
import { SocketService, RestService } from '../../feathers/feathers.service';

@Injectable()
export class UserService {

    public _socket;
    public _restLogin;
    public _localSocket;
    isLoggedIn = false;

    constructor(private socketService: SocketService, private restService: RestService
    ) {
       this._socket = socketService.getService('users');
       this._restLogin = restService.getService('auth/local');
    }

    logOut() {
        this.socketService.logOut();
    }
    login(query: any) {
        return this.socketService.loginIntoApp(query);
    }
    find(query: any) {
        return this._socket.find(query);
    }

    findAll() {
        return this._socket.find();
    }
    get(id: string, query: any) {
        return this._socket.get(id, query);
    }
    create(user: any) {
        return this._socket.create(user);
    }
}
