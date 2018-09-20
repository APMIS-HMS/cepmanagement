import { Injectable } from '../../../node_modules/@angular/core';
import { SocketService } from '../feathers/feathers.service';

@Injectable()
export class DashboardService {
    public _socket;
    constructor(private socketService: SocketService) {
        this._socket = socketService.getService('dashboard');
    }

    dashboardStat() {
        return this._socket.find();
    }
}
