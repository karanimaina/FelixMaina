import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ServiceComponent } from './service/service.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import {AlertComponent} from "./form/components/alert/alert.component";
import { InputComponent } from './input/input.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {ApiService} from "./services/api-service.service";
import {RegisterFormComponent} from "./form/components/register-form/register-form.component";
import {LoginFormComponent} from "./form/components/login-form/login-form.component";
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {NavComponent} from "./form/components/nav/nav.component";

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ProfileComponent,
    AboutMeComponent,
    ServiceComponent,
    PortfolioComponent,
    ContactComponent,
    AlertComponent,
    InputComponent,
    NavComponent,
    RegisterFormComponent,
    LoginFormComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    // FormModule

  ],
  providers: [ApiService],
  exports: [
    AlertComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
