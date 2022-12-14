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
import { LoginFormComponent } from './Forms/login-form/login-form.component';
import { RegisterFormComponent } from './Forms/register-form/register-form.component';
import {AlertComponent} from "./Forms/alert/alert.component";
import { InputComponent } from './input/input.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {ApiService} from "./services/api-service.service";
import { FormModule } from './form/form.module';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ProfileComponent,
    AboutMeComponent,
    ServiceComponent,
    PortfolioComponent,
    ContactComponent,
    LoginFormComponent,
    RegisterFormComponent,
    AlertComponent,
    InputComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
