import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserManagementComponent } from './user-management.component';
import { UserManagerComponent } from './user-manager/user-manager.component';


const usermanagementroutes: Routes = [
    {
         path: '', component : UserManagementComponent,
        children : [
            { path: 'users', component: UserManagerComponent }
        ]
  }
];

@NgModule({
    imports : [
        RouterModule.forChild(usermanagementroutes)
    ],
    exports : [
        RouterModule
    ]
})
export class ManagementPortalRouteModule{}