import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-about-me-form',
  templateUrl: './about-me-form.component.html',
  styleUrls: ['./about-me-form.component.css']
})
export class AboutMeFormComponent {
  name = new FormControl("", [
    Validators.required,
    Validators.minLength (3)
  ])
  description = new FormControl("", [
    Validators.required,
    Validators.minLength (3)
  ])
  birthDay = new FormControl("", [
    Validators.required,
    Validators.minLength (3)
  ])
  age = new FormControl("", [
    Validators.required,
    Validators.minLength (3)
  ])


  email = new FormControl("", [
    Validators.required,
    Validators.minLength (3)
  ])
  phoneNumber = new FormControl("", [
    Validators.pattern(/09(0[1-2]|1[\d]|3[\d]|2[0-1])[\d]{3}[\d]{4}/g),
    Validators.minLength (3)
  ])
  city = new FormControl("", [
    Validators.required,
    Validators.minLength (3)
  ])
  specialize = new FormControl("", [
    Validators.required,
    Validators.minLength (3)
  ])
  percentage = new FormControl("", [
    Validators.required,
    Validators.minLength (3)
  ])


  aboutForm = new FormGroup({
    name:this.name,
    description : this.description,
    birthDay  : this.birthDay,
    age : this.age,
    email  : this.email,
    phoneNumber  : this.phoneNumber,
    city  : this.city,
    specialize : this.specialize,
    percentage  :this.percentage
  })
  showAlert: any;
  saveDetails(){

  }
}
