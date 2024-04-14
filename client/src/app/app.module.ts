import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { PersonAppComponent } from "./person-app.component";
import { appRoutes } from "./routes";
import { PersonListComponent } from './person/person-list/person-list.component';
import { UpdatePersonComponent } from "./person/update-person/update-person.component";
import { AddPersonComponent } from "./person/add-person/add-person.component";
import { LoaderComponent } from "./shared/Loader/loader.component";


@NgModule({
   declarations: [
      PersonAppComponent,
      PersonListComponent,
      UpdatePersonComponent,
      AddPersonComponent,
      LoaderComponent,
   ],
   imports: [
      BrowserModule,
      RouterModule.forRoot(appRoutes),
      CommonModule,
      // InMemoryWebApiModule.forRoot(InMemoryDataService),
      HttpClientModule,
      FormsModule
   ],
   providers: [],
   bootstrap: [PersonAppComponent]
})
export class AppModule { }
