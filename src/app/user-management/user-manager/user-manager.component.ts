import { Component, OnInit, OnDestroy } from '../../../../node_modules/@angular/core';

@Component({
    selector: 'app-user-manager',
    templateUrl: './user-manager.component.html',
    styleUrls: ['./user-manager.component.css']
})
export class UserManagerComponent implements OnInit, OnDestroy {

    ngOnInit() {
        console.log('user manager component');
    }
    ngOnDestroy() {

    }
}
