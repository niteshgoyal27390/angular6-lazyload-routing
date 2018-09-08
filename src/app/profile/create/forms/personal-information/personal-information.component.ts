import { Component, OnInit, ViewChild } from '@angular/core';
import { PersonalInformationService } from './personal-information.service';
import { PersonalInformation } from './personal-information.model';
import { ProfileResource } from '../../../profile.resource';
import { CreateService } from '../../create.service';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss']
})
export class PersonalInformationComponent implements OnInit {
  personalInformation: PersonalInformation;
  personalInfoForm: FormGroup;
  submitted = false;
  url = 'img/avatar.png';

  constructor(private createService: CreateService,
    private personalInfoService: PersonalInformationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.personalInformation = this.createService.getAttorneyProfile().personalInformation;
    this.personalInfoForm = this.personalInfoService.createFormGroup(this.personalInformation);
  }

  get formControls() {
    return this.personalInfoForm.controls;
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

  private onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target.result;
      };
    }
  }
}
