import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { SearchFilterPipe } from './shared/pipes/search-filter.pipe';
import { YesNoDialogComponent } from './shared/dialog/yesno-dialog.component';
import { DropDownDirective } from './directives/dropdown.directive';

@NgModule({
    declarations : [
        SpinnerComponent,
        YesNoDialogComponent,
        SearchFilterPipe,
        DropDownDirective
    ],
    imports : [
        CommonModule
    ],
    exports : [
        SpinnerComponent,
        YesNoDialogComponent,
        SearchFilterPipe,
        DropDownDirective
    ]
})

export class AppSharedModule{

}