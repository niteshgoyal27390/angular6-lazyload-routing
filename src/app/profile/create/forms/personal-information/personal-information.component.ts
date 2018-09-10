import { Component, OnInit, ViewChild } from '@angular/core';
import { PersonalInformationService } from './personal-information.service';
import { PersonalInformation } from './personal-information.model';
import { CreateService } from '../../create.service';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss']
})

export class PersonalInformationComponent implements OnInit {
  personalInformation: PersonalInformation;
  personalInfoForm: FormGroup;
  submitted: Boolean = false;
  workExpList: FormArray;
  contactDetailList: FormArray;
  url: String = '/assets/img/avatar.png';

  constructor(private createService: CreateService,
    private personalInfoService: PersonalInformationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.createService.getAttorneyProfile().subscribe(attorney => {
      console.log(attorney);
      this.personalInformation = attorney.personalInformation;
      this.personalInfoForm = this.personalInfoService.createPersonalInfoFormGroup(this.personalInformation);
    });
  }

  get formControls() {
    return this.personalInfoForm.controls;
  }

  get workExps() {
    return this.personalInfoForm.get('workExps') as FormArray;
  }

  get contactDetails() {
    return this.personalInfoForm.get('contactDetails') as FormArray;
  }

  private addWorkExp() {
    this.workExpList = this.personalInfoForm.get('workExps') as FormArray;
    this.workExpList.push(this.createWorkExp());
  }

  private addContactDetail() {
    this.contactDetailList = this.personalInfoForm.get('contactDetails') as FormArray;
    this.contactDetailList.push(this.createcontactDetails());
  }

  private onSubmitPersonalInformation() {
    this.submitted = true;
    console.log(this.personalInfoForm);
    // stop here if form is invalid
    if (this.personalInfoForm.invalid) {
      return;
    }
    console.log('Personal Info Submited');
  }

  private createWorkExp(): FormGroup {
    return new FormGroup({
      role: new FormControl('', Validators.required),
      firmName: new FormControl('', Validators.required),
      location: new FormControl(''),
      fromDate: new FormGroup({
        fromMonth: new FormControl(''),
        fromYear: new FormControl('')
      }),
      toDate: new FormGroup({
        toMonth: new FormControl(''),
        toYear: new FormControl('')
      })
    });
  }

  private createcontactDetails(): FormGroup {
    return new FormGroup({
      contactType: new FormControl('', Validators.required),
      contactNumber: new FormControl('', [Validators.required, Validators.maxLength(10)]),
      contactExt: new FormControl('')
    });
  }

  private onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event: any) => { // called once readAsDataURL is completed
        this.url = event.target.result;
      };
    }
  }
}
