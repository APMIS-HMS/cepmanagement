import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoaderService } from '../loader.service';
import { Subscription } from 'rxjs/Subscription';
import { GenericState } from '../../models/generic-state';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit, OnDestroy {

  show = true;
  private spinnerSubscription: Subscription;
  constructor(private loaderService: LoaderService) { }


  ngOnInit() {
    this.spinnerSubscription = this.loaderService.loaderState.subscribe((state: GenericState) => {
        this.show = state.show;
        console.log(state);
    });
  }

  ngOnDestroy() {
    this.spinnerSubscription.unsubscribe();
  }

}
