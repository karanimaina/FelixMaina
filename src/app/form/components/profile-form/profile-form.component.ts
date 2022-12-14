import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent {


 name = new FormControl("", [
    Validators.required,
    Validators.minLength (3)
  ])
  description = new FormControl("", [
    Validators.required,
    Validators.minLength (3)
  ])
  definition = new FormControl("", [
    Validators.required,
    Validators.minLength (3)
  ])
  definition1 = new FormControl("", [
    Validators.required,
    Validators.minLength (3)
  ])
  definition2 = new FormControl("", [
    Validators.required,
    Validators.minLength (3)
  ])


  profileForm = new FormGroup({
    name:this.name,
    description : this. description,
    definition  : this. definition,
    definition1  : this.definition1,
    definition2  : this.definition2
  })

  saveProfile() {

  }
}
