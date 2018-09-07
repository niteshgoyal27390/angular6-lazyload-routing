import { Component, OnInit } from '@angular/core';
import { PersonalInformationService } from './personal-information.service';
import { PersonalInformation } from './personal-information.model';
import { ProfileResource } from '../../../profile.resource';
import { CreateService } from '../../create.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss']
})
export class PersonalInformationComponent implements OnInit {
  personalInformation: PersonalInformation
  personalInfoForm: FormGroup
  
  constructor(private createService: CreateService,
    private personalInfoService: PersonalInformationService
    ) { }

  ngOnInit() {
    this.personalInformation = this.createService.getAttorneyProfile().personalInformation;
    this.personalInfoForm = this.personalInfoService.createFormGroup(this.personalInformation);
  }

}
