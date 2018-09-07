import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PersonalInformation } from './personal-information.model';

@Injectable({
  providedIn: 'root'
})

export class PersonalInformationService {

  constructor() { }

  public createFormGroup(attorney: PersonalInformation): FormGroup {
    return new FormGroup({
      firstName: new FormControl(attorney.firstName, Validators.required),
      lastName: new FormControl(attorney.lastName, Validators.required)
    })
  }
}
