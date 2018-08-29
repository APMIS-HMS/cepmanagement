import { NgModule } from "@angular/core";
import { PersonManagerComponent } from "./person-manager.component";
import { PersonsComponent } from "./persons/persons.component";
import { PersonComponent } from "./person/person.component";
import { Routes, RouterModule } from "@angular/router";


const personmanagerroutes : Routes = [
 { path : '', component : PersonManagerComponent, 
 children:[
    { path: '', redirectTo: 'list', pathMatch: 'full'},
    { path: 'list', component : PersonsComponent },
    { path: 'detail', component : PersonComponent }
  ]
 }
]

@NgModule({

    imports : [
        RouterModule.forChild(personmanagerroutes)
    ],
    exports : [
        RouterModule
    ]
})
export class PersonManagerRoutes {

}