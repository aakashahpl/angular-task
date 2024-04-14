import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from '../../shared/toastr.service';
import { IPerson } from '../person.model';

import { PersonService } from "../../services/person.service";

@Component({
   templateUrl: '../../shared/person-form.component.html'
})
export class AddPersonComponent implements OnInit{

   person: IPerson = {
      _id: "",
      firstName: "",
      lastName: "",
      mobile: "",
      age:0
   }

   constructor(
      private personService: PersonService,
      private router: Router,
      private toastr: ToastrService,
   ) { }

   ngOnInit() {
   }

   async onSubmit(formValues) {
    formValues.PersonTypeId = +formValues.PersonTypeId;
    try {
      const result = await this.personService.addPerson(formValues);
  
      // Success!
      this.router.navigate(['/person']);
      this.toastr.success("Added new person");
  
    } catch (error) {
      // Handle error
      this.toastr.error(error); 
    }
  }
}