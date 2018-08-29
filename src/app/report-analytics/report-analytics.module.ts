import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { ReportAnalyticsComponent } from './report-analytics.component';
import { ReportAnalyticsRouteModule } from './report-analytics.routes';

@NgModule({
    declarations : [
        ReportAnalyticsComponent
    ],
    imports : [
        CommonModule,
        ReportAnalyticsRouteModule
    ]

})

export class ReportAnalyticsModule {
}