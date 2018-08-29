import { Response } from './../../models/error';
import { Subject } from 'rxjs';
import { Injectable } from "../../../../node_modules/@angular/core";

@Injectable()
export class NotificationService{

    private notificationSubject = new Subject<Response>()
    notificationObserver = this.notificationSubject.asObservable();
    constructor(){
    }

    notify(data : Response){
        this.notificationSubject.next(data);
    }

}