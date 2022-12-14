import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-experience-form',
  templateUrl: './experience-form.component.html',
  styleUrls: ['./experience-form.component.css']
})
export class ExperienceFormComponent {

  startDate = new FormControl("", [
    Validators.required,
    Validators.minLength (3)
  ])
  endDate = new FormControl("", [
    Validators.required,
    Validators.minLength (3)
  ])
  companyName = new FormControl("", [
    Validators.required,
    Validators.minLength (3)
  ])
  position = new FormControl("", [
    Validators.required,
    Validators.minLength (3)
  ])
  description = new FormControl("", [
    Validators.required,
    Validators.minLength (3)
  ])


  aboutForm = new FormGroup({
    startDate:this.startDate,
    endDate : this. endDate,
    companyName  : this. companyName,
    position  : this.position,
    description  : this.description,

  })
  saveExperience(){

  }}
