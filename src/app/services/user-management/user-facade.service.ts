import { BaseService } from './../global/base-service';
import { SocketService, RestService } from '../../feathers/feathers.service';
import { User } from '../../models/user';
import { Injectable, Injector } from '@angular/core';

@Injectable()
export class UserFacadeService {
  private user: User;
  private userDetails: any;

  constructor(private _socketService: SocketService, private _restService: RestService) {
  }

   getUser() {
    return this.user;
  }
   setUser(user) {
    this.user = user;
  }
  
  getUserDetails() {
    return this.userDetails;
  }
  authenticateResource() {
    return this._socketService.authenticateService();
  }
}
