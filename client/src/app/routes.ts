import { Routes } from "@angular/router";

import { PersonListComponent } from "./person/person-list/person-list.component";
import { UpdatePersonComponent } from "./person/update-person/update-person.component";
import { AddPersonComponent } from "./person/add-person/add-person.component";

export const appRoutes: Routes = [
   { path: 'persons/add', component: AddPersonComponent },
   { path: 'persons/update/:id', component: UpdatePersonComponent },
   { path: 'persons', component: PersonListComponent },
   { path: '', redirectTo: 'persons', pathMatch: 'full' },
   { path: '**', redirectTo: 'persons', pathMatch: 'full' }
]