import { IPerson } from '../person/person.model';
import { Injectable } from '@angular/core';


@Injectable({
   providedIn:'root'
})

export class PersonService {
  private personUrl = "http://localhost:3001/api/person";

  async getPersons() {
   try {
     const response = await fetch(this.personUrl);
     if (!response.ok) {
       throw new Error(`HTTP error! Status: ${response.status}`);
     }
     const data = await response.json(); 
     return data;
   } catch (error) {
     return this.handleError(error); 
   }
 }
 async getPerson(_id: string) {
  try {
    const url = `${this.personUrl}/${_id}`;

    const response:any = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data.person;
  } catch (error) {
    return this.handleError(error);
  }
}


async addPerson(person: IPerson) {
  try {
    console.log(person);
    const response = await fetch(this.personUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(person)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    return this.handleError(error); 
  }
}

async updatePerson(_id: string, update: IPerson) {
  try {
    console.log(_id);
    const url = `${this.personUrl}/${_id}`;
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify(update)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    return this.handleError(error);
  }
}

async deletePerson(_id: string) {
   try {
      console.log(_id);
     const url = `${this.personUrl}/${_id}`;
     const response = await fetch(url, { method: 'DELETE' });
 
     if (!response.ok) {
       throw new Error(`HTTP error! Status: ${response.status}`);
     }
 
     return {}; // No data expected in a delete response
   } catch (error) {
     return this.handleError(error);
   }
 }

  private handleError(error: any) {
    if (error.response) {
      // Server responded with a status code outside of 2xx range
      console.error(
        `Backend returned code ${error.response.status}, ` +
        `body was: ${error.response.data}`
      );
    } else if (error.request) {
      // Request made but no response received
      console.error('An error occurred:', error.message);
    } else {
      // Something else happened setting up the request
      console.error('Error', error.message);
    }

    // Rethrow the error for further handling if needed
    throw error; 
  }
}
