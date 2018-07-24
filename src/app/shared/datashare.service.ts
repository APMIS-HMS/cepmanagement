import { Injectable } from "@angular/core";
import { Subject } from 'rxjs/Subject';

@Injectable()
export class DataShareService{

    public _dataShareSubject = new Subject<any>();

    sendDataToComponent(data : any){
        this._dataShareSubject.next(data);
    }
}