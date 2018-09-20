import { GenericState } from '../models/generic-state';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class LoaderService {

    private loaderSubject = new Subject<GenericState>();
    loaderState = this.loaderSubject.asObservable();

    show() {
       return this.loaderSubject.next(<GenericState>{ show : true });
    }
    hide() {
        this.loaderSubject.next(<GenericState> { show : false });
    }
}
