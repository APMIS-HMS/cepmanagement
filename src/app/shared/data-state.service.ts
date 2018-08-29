import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { GenericState } from '../models/generic-state';

@Injectable()
export class DataStateService {

    private stateSubject = new Subject<GenericState>();
    stateObservable = this.stateSubject.asObservable();

    activeState(state){
        return this.stateSubject.next(<GenericState> { show : state});
    }

}