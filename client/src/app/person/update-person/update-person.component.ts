import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from '../../shared/toastr.service';
import { IPerson } from '../person.model';
import { PersonService } from '../../services/person.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  templateUrl: '../../shared/person-form.component.html',
})
export class UpdatePersonComponent implements OnInit {
  person: IPerson;

  constructor(
    private personService: PersonService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) {}

   async ngOnInit() {
    try {
      const _id = this.route.snapshot.paramMap.get('_id');
      const personDetails =  await this.personService.getPerson(
        "661c0fb5534f7953492ae5af"
      );
      this.person = personDetails;
    } catch (error) {
      console.error('Error fetching person details:', error);
    }
  }

  async onSubmit(formValues) {
    try {
   
      console.log(this.person);
      let personId = this.person._id;

      this.personService.updatePerson(personId, formValues);
  
      this.toastr.success('Updated successfully');
    } catch (error) {}
   
  }
}
