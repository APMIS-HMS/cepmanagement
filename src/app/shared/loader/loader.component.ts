import { LoaderState } from '../../models/loader';
import { LoaderService } from '../loader.service';
import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit, OnDestroy {

show : boolean = false;
private loaderSubscription : Subscription

  constructor(private loaderService : LoaderService) { }

  ngOnInit() {

    this.loaderSubscription = this.loaderService.loaderState
            .subscribe( (state : LoaderState) => {
            this.show = state.show;
        });

  }

  ngOnDestroy(){
    this.loaderSubscription.unsubscribe();
  }
}
