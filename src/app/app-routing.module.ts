import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProfileComponent} from "./profile/profile.component";
import {AboutMeComponent} from "./about-me/about-me.component";
import {PortfolioComponent} from "./portfolio/portfolio.component";
import {ServiceComponent} from "./service/service.component";
import {ContactComponent} from "./contact/contact.component";
import {RegisterFormComponent} from "./Forms/register-form/register-form.component";
import {LoginFormComponent} from "./Forms/login-form/login-form.component";


const routes: Routes = [
  {path:'',component:ProfileComponent},
  {path:'home',component:ProfileComponent},
  {path:'aboutMe',component :AboutMeComponent},
  {path:'portfolio',component:PortfolioComponent},
  {path:'service',component:ServiceComponent},
  {path:'contact',component:ContactComponent},
  {path:'register',component:RegisterFormComponent},
  {path:'login',component:LoginFormComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

