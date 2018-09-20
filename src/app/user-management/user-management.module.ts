import { NgModule } from '../../../node_modules/@angular/core';
import { UserManagementComponent } from './user-management.component';
import { ManagementPortalRouteModule } from './user-management.component.routes';
import { UserManagerComponent } from './user-manager/user-manager.component';
import { CreateUserComponent } from './user-manager/create-user/create-user.component';

@NgModule({
    declarations : [
        UserManagementComponent,
        UserManagerComponent,
        CreateUserComponent
    ],
    imports: [
        ManagementPortalRouteModule
    ]
})
export class UserManagementModule {

}
