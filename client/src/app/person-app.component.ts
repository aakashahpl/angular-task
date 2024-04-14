import { Component } from '@angular/core';

@Component({
   selector: 'person-app',
   template: `
      <nav class='navbar navbar-expand navbar-bg'>
         <ul class='nav nav-pills'>
            <li><a class='nav-link' routerLinkActive='active' [routerLinkActiveOptions]="{exact: true}" [routerLink]="['/persons']">Person List</a></li>
            <li><a class='nav-link' routerLinkActive='active' [routerLink]="['/persons/add']">Add Person</a></li>
         </ul>
      </nav>
      <div class="container">
         <router-outlet></router-outlet>
      </div>
   `
})
export class PersonAppComponent {

}