import { LoaderState } from '../models/loader';
import { Injectable } from "@angular/core";
import { Subject } from 'rxjs/Subject';

@Injectable()
export class LoaderService{

    private loaderSubject = new Subject<LoaderState>();
    loaderState = this.loaderSubject.asObservable();

    show(){
       return this.loaderSubject.next(<LoaderState>{ show : true });
    }
    
    hide(){
        this.loaderSubject.next(<LoaderState> { show : false });
    }
}