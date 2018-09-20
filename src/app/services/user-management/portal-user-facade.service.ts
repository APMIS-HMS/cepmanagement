import { LocalSocketService } from './../../feathers/local-feathers.service';
import { Injectable } from '../../../../node_modules/@angular/core';

@Injectable()
export class PortalUserFacadeService {
    private portalUser;
    constructor(private portalSocket: LocalSocketService) {

    }
    getUser() {
        return this.portalUser;
      }
       setUser(user) {
        this.portalUser = user;
      }
      authenticateResource() {
        return this.portalSocket.authenticateService();
      }
}

