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
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {RegisterFormComponent} from "./form/components/register-form/register-form.component";
import {LoginFormComponent} from "./form/components/login-form/login-form.component";
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {NavComponent} from "./form/components/nav/nav.component";
import {TokenInterceptorService} from "./api/token-interceptor.service";
import {ApiService} from "./api/api.service";
import {RepositoryComponent} from "./repo/repository/repository.component";
import { DateCountPipe } from './pipe/date-count.pipe';
import { CapitalizeSentencePipe } from './pipe/capitalize-sentence-pipe.pipe';
import { StrikethroughDirective } from './strikethrough.directive';

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
    RepositoryComponent,
    RegisterFormComponent,
    LoginFormComponent,
    DateCountPipe,
    CapitalizeSentencePipe,
    StrikethroughDirective


  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    // FormModule

  ],
  providers: [ApiService,{provide:HTTP_INTERCEPTORS,useClass:TokenInterceptorService,multi:true}],
  exports: [
    AlertComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
