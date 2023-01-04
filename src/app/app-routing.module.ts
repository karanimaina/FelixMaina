import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProfileComponent} from "./profile/profile.component";
import {AboutMeComponent} from "./about-me/about-me.component";
import {PortfolioComponent} from "./portfolio/portfolio.component";
import {ServiceComponent} from "./service/service.component";
import {ContactComponent} from "./contact/contact.component";
import {RegisterFormComponent} from "./form/components/register-form/register-form.component";
import {LoginFormComponent} from "./form/components/login-form/login-form.component";
import {NavComponent} from "./form/components/nav/nav.component";
import {RepositoryComponent} from "./repo/repository/repository.component";


const routes: Routes = [
  {path:'',component:ProfileComponent},
  {path:'home',component:ProfileComponent},
  {path:'aboutMe',component :AboutMeComponent},
  {path:'portfolio',component:PortfolioComponent},
  {path:'service',component:ServiceComponent},
  {path:'contact',component:ContactComponent},
  {path:"sign", component:RegisterFormComponent},
  {path:"login", component:LoginFormComponent},
  {path:'repository',component:RepositoryComponent},
  {
    path:'nav',
    component: NavComponent,
    children: [
      {
        path: "",
        loadChildren: () =>
          import("./form/form.module").then(m => m.FormModule)
      },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: []
})
export class AppRoutingModule { }

