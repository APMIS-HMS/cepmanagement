import { SocketService } from './../../feathers/feathers.service';
import { Injectable } from '../../../../node_modules/@angular/core';
import { LocalStorageService } from '../../../../node_modules/angular-2-local-storage';

@Injectable()
export class UserDetailsService {


    constructor(locker: LocalStorageService) {
    }

}
