import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { PersonalInformation, ContactDetail, WorkExperience } from './personal-information.model';

@Injectable({
  providedIn: 'root'
})

export class PersonalInformationService {
  contactDetails: FormGroup[];
  workExps: FormGroup[];

  constructor() { }

  public createFormGroup(attorney: PersonalInformation): FormGroup {
    return new FormGroup({
      firstName: new FormControl(attorney.firstName, Validators.required),
      lastName: new FormControl(attorney.lastName, Validators.required),
      email: new FormControl(attorney.email, [Validators.required, Validators.email]),
      description: new FormControl(attorney.description, [Validators.required, Validators.maxLength(255)]),
      jurisdiction: new FormControl(attorney.jurisdiction, Validators.required),
      contactDetails: new FormArray([]),
      faxNumber: new FormControl(attorney.faxNumber),
      workExps: new FormArray(this.createWorkExperienceFormGroups(attorney.workExps))
    });
  }

  private createContactDetailFormGroups(contactDetails: ContactDetail[]): FormGroup[] {
    contactDetails.forEach((contactDetail: ContactDetail) => {
      this.contactDetails.push(
        new FormGroup({
          contactType: new FormControl(contactDetail.type, Validators.required),
          contactNumber: new FormControl(contactDetail.number, Validators.required),
          contactExt: new FormControl(contactDetail.ext)
        })
      );
    });
    return this.contactDetails;
  }

  private createWorkExperienceFormGroups(workExps: WorkExperience[]): FormGroup[] {
    workExps.forEach((workExp: WorkExperience) => {
      this.workExps.push(
        new FormGroup({
          role: new FormControl(workExp.role, Validators.required),
          firmName: new FormControl(workExp.firmName, Validators.required),
          location: new FormControl(workExp.location),
          fromDate: new FormGroup({
            fromMonth: new FormControl(workExp.fromDate.month),
            fromYear: new FormControl(workExp.fromDate.year)
          }),
          toDate: new FormGroup({
            toMonth: new FormControl(workExp.toDate.month),
            toYear: new FormControl(workExp.toDate.year)
          })
        })
      );
    });
    return this.workExps;
  }
}

