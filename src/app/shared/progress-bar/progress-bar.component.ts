import { GenericState } from './../../models/generic-state';
import { Component, OnInit, OnDestroy, Input } from '../../../../node_modules/@angular/core';
import { Subscription } from '../../../../node_modules/rxjs';
import { LoaderService } from '../loader.service';

@Component({
    selector: 'app-progress-bar',
    templateUrl: './progress-bar.component.html',
    styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit, OnDestroy {
    show = true;
    @Input() barText: String;
    progressBarText;
    private progressBarSubscription: Subscription;

    constructor(private loaderService: LoaderService) {
    }
    ngOnInit() {
        this.progressBarSubscription = this.loaderService.loaderState.subscribe((state: GenericState) => {
            this.show = state.show;
            console.log(state);
        });
        this.progressBarText = this.barText;
    }

    ngOnDestroy() {
        if (this.progressBarSubscription) {
            this.progressBarSubscription.unsubscribe();
        }
    }
}
