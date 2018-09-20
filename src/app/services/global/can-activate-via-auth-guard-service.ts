import { LocalStorageService } from 'angular-2-local-storage';
import { Injectable } from '../../../../node_modules/@angular/core';
import { CanActivate } from '../../../../node_modules/@angular/router';

@Injectable()
export class CanActivateViaAuthGuardService implements CanActivate {

    constructor(private locker: LocalStorageService) {

    }
    canActivate() {
        const auth = this.locker.get('auth');
        if (auth !== undefined && auth != null) {
            return true;
          }
          return false;
    }
}
