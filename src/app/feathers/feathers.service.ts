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

//const HOST = 'https://apmisapitest.azurewebsites.net'; // Online
const HOST = 'http://localhost:3031'; //local


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
      .configure(authentication({ storage: window.localStorage }));

     this._app.on('reauthentication-error', this.errorHandler)
    
  }

  logOut() {
    this._app.logout();
    this.locker.remove();
  }
  loginIntoApp(query: any) {
    let login = this._app.authenticate({
      'strategy': 'local',
      'email': query.email,
      'password': query.password
    });
    //console.log(login);
    return login;
    // return this._app.authenticate({
    //   'strategy': 'local',
    //   'email': query.email,
    //   'password': query.password
    // });
  }
  authenticateService() {
    return this._app.authenticate();
  }
  
  getService(value : any){
    return this._app.service(value);
  }

}

const superagent = require('superagent');
@Injectable()
export class RestService {
  public HOST;
  private _app: any;
  logOut() {
    // this.locker.clear();
    this.locker.clearAll();
  }
  constructor(private locker: LocalStorageService, private _router: Router) {
    this.HOST = HOST;
    if (this.locker.get('auth') !== undefined && this.locker.get('auth') != null) {
      const auth: any = this.locker.get('token')
      this._app = feathers()
        .configure(rest(this.HOST).superagent(superagent,
          {
            headers: { 'authorization': 'Bearer ' + auth }
          }
        )) // Fire up rest
        .configure(rx({ idField: '_id', listStrategy: 'always' }))
        // .configure(hooks())
        .configure(authentication({ storage: window.localStorage }));
    } else {
      this._app = feathers() // Initialize feathers
        .configure(rest(this.HOST).superagent(superagent)) // Fire up rest
        // .configure(hooks())
        .configure(authentication({ storage: window.localStorage })); // Configure feathers-hooks
    }
  }
  loginIntoApp(query) {
    return this._app.authenticate({
      'strategy': 'local',
      'email': query.email,
      'password': query.password
    });
  }
  getService(value: any) {
    // this._app.authenticate();
    return this._app.service(value);
  }
  authenticateService() {
    return this._app.authenticate();
  }
  getHost() {
    return this.HOST;
  }
}
