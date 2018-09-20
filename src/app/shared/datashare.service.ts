import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class DataShareService {

    private dataShareSubject = new Subject();
    currentData = this.dataShareSubject.asObservable();

    // private localShareSubject = new Subject();
    // localcurrentData = this.localShareSubject.asObservable();

    private dataShareBehaviourSbj = new BehaviorSubject<string>('');
    componentData = this.dataShareBehaviourSbj.asObservable();


    emitData (data: string) {
        console.log(data);
        this.dataShareSubject.next(data);
        this.dataShareBehaviourSbj.next(data);
    }
    // emitLocalData(data: String) {
    //     console.log(data);
    //     this.localShareSubject.next(data);
    // }
}
