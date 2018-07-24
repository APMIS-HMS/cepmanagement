import { Router } from '@angular/router';
const feathers = require('@feathersjs/feathers');
const socketio = require('@feathersjs/socketio-client');
const io = require('socket.io-client');
const localstorage = require('feathers-localstorage');
// const hooks = require('feathers-hooks');
const rest = require('@feathersjs/rest-client');
const authentication = require('@feathersjs/authentication-client');
import { CoolLocalStorage } from 'angular2-cool-storage';
import { LocalStorageService } from 'angular-2-local-storage';
import { Injectable } from '@angular/core';
const rx = require('feathers-reactive');
const RxJS = require('rxjs/Rx');

const HOST = 'https://apmisapitest.azurewebsites.net'; // Online
//const HOST = 'http://localhost:3031'; //local


@Injectable()
export class SocketService {
  
  public socket: any;
  public HOST;
  private _app: any;

  errorHandler = error => {
    this._app.authenticate({
      strategy: 'local',
      email: 'admin@feathersjs.com',
      password: 'admin'
    }).then(response => {
      // You are now authenticated again
    });
  };

  constructor(private locker: LocalStorageService, private _router: Router){
    this.HOST = HOST;
    this.socket = io(this.HOST);
    this._app = feathers()
      .configure(socketio(this.socket))
      .configure(rx({ idField: "_id", listStrategy: 'always' }))
      //.configure(rx(RxJS, { listStrategy: 'always' }))
      // .configure(hooks())
      .configure(authentication({ storage: window.localStorage }));
     this._app.on('reauthentication-error', this.errorHandler)
    
  }

  logOut() {
    this._app.logout();
    this.locker.remove();
  }
  loginIntoApp(query: any) {
    return this._app.authenticate({
      'strategy': 'local',
      'email': query.email,
      'password': query.password
    });
  }
  authenticateService() {
    return this._app.authenticate();
  }
  
  getService(value : any){
    return this._app.service(value);
  }

}

export class RestService{

}
