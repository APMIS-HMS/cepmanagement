import { GenericState } from './../../models/generic-state';
import { Component, OnInit, OnDestroy, Input } from '../../../../node_modules/@angular/core';
import { Subscription } from '../../../../node_modules/rxjs';
import { LoaderService } from '../loader.service';
import { PortalUserService } from '../../services/user-management/portal-user.service';
import { PortalUserFacadeService } from '../../services/user-management/portal-user-facade.service';
import { LocalStorageService } from '../../../../node_modules/angular-2-local-storage';

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

    constructor(private loaderService: LoaderService,
        private portaluserService: PortalUserService, 
        private portalUserFacade: PortalUserFacadeService,
        private locker: LocalStorageService) {
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
