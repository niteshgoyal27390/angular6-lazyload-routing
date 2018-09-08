import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { PersonalInformationComponent } from './create/forms/personal-information/personal-information.component';
import { AchievementsComponent } from './create/forms/achievements/achievements.component';
import { NotableMattersComponent } from './create/forms/notable-matters/notable-matters.component';
import { FirmDescriptionComponent } from './create/forms/firm-description/firm-description.component';
import { EducationDetailsComponent } from './create/forms/education-details/education-details.component';

const routes: Routes = [
  {
    path: 'create',
    component: CreateComponent,
    children: [
      {
        path: 'personal-information',
        component: PersonalInformationComponent
      },
      {
        path: 'education-details',
        component: EducationDetailsComponent
      },
      {
        path: 'firm-description',
        component: FirmDescriptionComponent
      },
      {
        path: 'notable-matters',
        component: NotableMattersComponent
      },
      {
        path: 'achievements',
        component: AchievementsComponent
      },
    ]
  }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
