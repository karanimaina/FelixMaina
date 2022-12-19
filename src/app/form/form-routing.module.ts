import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AboutMeFormComponent} from "./components/about-me-form/about-me-form.component";
import {ProfileFormComponent} from "./components/profile-form/profile-form.component";
import {EducationFormComponent} from "./components/education-form/education-form.component";
import {ExperienceFormComponent} from "./components/experience-form/experience-form.component";
import {HomeFormComponent} from "./components/home-form/home-form.component";

const routes: Routes = [
  {path: '', component: HomeFormComponent},
  {path: 'about', component: AboutMeFormComponent},
  {path: 'profile', component: ProfileFormComponent},
  {path: 'education', component: EducationFormComponent},
  {path: 'experience', component: ExperienceFormComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule {
}
