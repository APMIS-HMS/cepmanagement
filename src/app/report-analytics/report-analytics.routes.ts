import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";


const reportRoutes : Routes = [

]

@NgModule({
    imports : [
        RouterModule.forChild(reportRoutes)
    ],
    exports : [
        RouterModule
    ]
})
export class ReportAnalyticsRouteModule{

}