import { ManagementPortalSharedModule } from '../management-portal-shared.module';
import { FundWalletComponent } from '../fund-wallet/fund-wallet.component';
import { PersonsComponent } from './persons/persons.component';
import { NgModule } from "@angular/core";
import { PersonManagerComponent } from "./person-manager.component";
import { PersonComponent } from "./person/person.component";
import { PersonWalletComponent } from './person-wallet/person-wallet.component';
import { CommonModule } from '@angular/common';
import { PersonManagerRoutes } from './person-manager.route';
import { AppSharedModule } from '../../app.shared.module';

@NgModule({

    declarations : [
        PersonManagerComponent,
        PersonComponent,
        PersonsComponent,
        PersonWalletComponent,
    ],
    imports : [
        CommonModule,
        ManagementPortalSharedModule,
        AppSharedModule,
        PersonManagerRoutes
    ]
})
export class PersonManagerModule{
    
}