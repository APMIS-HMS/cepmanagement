import { DashboardComponent } from './dashboard/dashboard.component';
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AuthComponent} from './auth/auth.component';
import { ProfessionComponent } from './dashboard/profession/profession.component';
import { HomeComponent } from './dashboard/home/home.component';
import { AddProfessionComponent } from './dashboard/profession/add-profession/add-profession.component';
import { ProfessionCaderComponent } from './dashboard/profession/profession-cader/profession-cader.component';
import { TitleComponent } from './dashboard/title/title.component';
import { CountryComponent } from './dashboard/country/country.component';
import { StatesComponent } from './dashboard/country/states/states.component';
import { LgComponent } from './dashboard/country/states/lg/lg.component'; 

const appRoutes: Routes = [
    {path: '', redirectTo: 'auth', pathMatch: 'full'},
    {path: 'auth', component : AuthComponent},
    {path: 'dashboard', component : DashboardComponent,
      children : [
        {path: '', redirectTo : 'home', pathMatch: 'full'},
        {path : 'home', component : HomeComponent},
        {path : 'profession', component : ProfessionComponent},
        {path: 'profession/:id', component: ProfessionCaderComponent},
        {path: 'title', component: TitleComponent},
        {path: 'country', component: CountryComponent},
        {path: 'country/:id', component: StatesComponent},
        {path: 'country/:id/:id2', component: LgComponent}
      ]
    }
];

@NgModule({
    imports: [
      RouterModule.forRoot(appRoutes)
    ],
    exports: [
      RouterModule
    ]
  })
  export class AppRoutingModule {
  }
