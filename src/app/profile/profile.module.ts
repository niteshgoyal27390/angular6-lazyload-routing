import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { ProfileRoutingModule } from './/profile-routing.module';
import { VerticalStepperComponent } from './create/vertical-stepper/vertical-stepper.component';
import { PersonalInformationComponent } from './create/forms/personal-information/personal-information.component';
import { ProgressStatusComponent } from './create/progress-status/progress-status.component';
import { EducationDetailsComponent } from './create/forms/education-details/education-details.component';
import { FirmDescriptionComponent } from './create/forms/firm-description/firm-description.component';
import { NotableMattersComponent } from './create/forms/notable-matters/notable-matters.component';
import { AchievementsComponent } from './create/forms/achievements/achievements.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    CreateComponent,
    VerticalStepperComponent,
    PersonalInformationComponent,
    ProgressStatusComponent,
    EducationDetailsComponent,
    FirmDescriptionComponent,
    NotableMattersComponent,
    AchievementsComponent
  ]
})
export class ProfileModule { }
