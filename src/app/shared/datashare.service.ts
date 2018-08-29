import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Title } from '../models/title';
import { Injectable, OnInit } from "@angular/core";
import { Subject } from 'rxjs/Subject';

@Injectable()
export class DataShareService {

    private dataShareSubject = new Subject();
    currentData = this.dataShareSubject.asObservable();

    private dataShareBehaviourSbj = new BehaviorSubject<string>('');
    componentData = this.dataShareBehaviourSbj.asObservable();

    emitData (data : any){
        this.dataShareSubject.next(data);
        this.dataShareBehaviourSbj.next(data);
    }
}