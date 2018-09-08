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
      lastName: new FormControl(attorney.lastName, Validators.required),
      email: new FormControl(attorney.email, [Validators.required, Validators.email]),
      description: new FormControl(attorney.description, [Validators.required, Validators.maxLength(255)]),
      jurisdiction: new FormControl(attorney.jurisdiction, Validators.required),
      phoneNumber: new FormGroup({
        type: new FormControl(attorney.phoneNumber.type, Validators.required ),
        number: new FormControl(attorney.phoneNumber.number, [Validators.required, Validators.maxLength(10)]),
        ext: new FormControl(attorney.phoneNumber.ext)
      }),
      faxNumber: new FormControl(attorney.faxNumber)
    });
  }
}
