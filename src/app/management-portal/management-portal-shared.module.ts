import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { FundWalletComponent } from './fund-wallet/fund-wallet.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpinnerComponent } from '../shared/spinner/spinner.component';


@NgModule({
    declarations : [
        FundWalletComponent
    ],
    imports : [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports : [
        FundWalletComponent
    ]
})
export class ManagementPortalSharedModule{

}