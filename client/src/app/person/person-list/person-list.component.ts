import { toBase64String } from '@angular/compiler/src/output/source_map';
import { Component, OnInit } from '@angular/core';
import { IPerson } from '../person.model';

import { PersonService } from "../../services/person.service";
import { ToastrService } from "../../shared/toastr.service";

@Component({
   templateUrl: './person-list.component.html',
   styles: [`
      td button {
         margin-right: 10px;
      }
   `]
})
export class PersonListComponent implements OnInit {

   persons: IPerson[];
   detailedPerson: IPerson;

   constructor(
      private personService: PersonService,
      private toastr: ToastrService,
   ) {}
   async ngOnInit() {
      try {
        const response = await this.personService.getPersons();
        this.persons = response.persons;
        console.log(this.persons);
      } catch (error) {
       
        console.error("Error fetching person details:", error); 
      }
    }

   async delete(_id: string) {
      try {
         const response = await this.personService.deletePerson(_id);
         this.persons = this.persons.filter(emp => emp._id !== _id)
         this.toastr.success("Deleted successfully");
       } catch (error) {
        
         console.error("Error fetching person details:", error); 
       }
   }
   public keepOriginalOrder = (a, b) => a.key;

}