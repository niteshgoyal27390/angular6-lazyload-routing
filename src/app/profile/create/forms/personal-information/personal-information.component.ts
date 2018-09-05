import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss']
})
export class PersonalInformationComponent implements OnInit {
  personalDetailsFormGroup: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.personalDetailsFormGroup = this.fb.group({
      name: this.createFormGroup()
    })
  }

  private createFormGroup = () => {
    return new FormGroup({

    });
  }

}
