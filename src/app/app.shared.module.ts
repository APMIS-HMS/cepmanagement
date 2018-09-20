import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { SearchFilterPipe } from './shared/pipes/search-filter.pipe';
import { YesNoDialogComponent } from './shared/dialog/yesno-dialog.component';
import { DropDownDirective } from './directives/dropdown.directive';
import { ProgressBarComponent } from './shared/progress-bar/progress-bar.component';
import { MatProgressBarModule } from '@angular/material';

@NgModule({
    declarations : [
        SpinnerComponent,
        ProgressBarComponent,
        YesNoDialogComponent,
        SearchFilterPipe,
        DropDownDirective
    ],
    imports : [
        CommonModule,
        MatProgressBarModule
    ],
    exports : [
        SpinnerComponent,
        ProgressBarComponent,
        YesNoDialogComponent,
        SearchFilterPipe,
        DropDownDirective
    ]
})

export class AppSharedModule {

}