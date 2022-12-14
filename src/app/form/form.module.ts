import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import {FormComponent} from "./form/form.component";
import {AboutMeFormComponent} from "./components/about-me-form/about-me-form.component";
import {ProfileFormComponent} from "./components/profile-form/profile-form.component";
import {EducationFormComponent} from "./components/education-form/education-form.component";
import {ExperienceFormComponent} from "./components/experience-form/experience-form.component";
import {NavComponent} from "./components/nav/nav.component";


@NgModule({
  declarations: [
    FormComponent,
    AboutMeFormComponent,
    ProfileFormComponent,
    EducationFormComponent,
    ExperienceFormComponent,
    NavComponent
  ],
  imports: [
    CommonModule,
    FormRoutingModule
  ]
})
export class FormModule { }
