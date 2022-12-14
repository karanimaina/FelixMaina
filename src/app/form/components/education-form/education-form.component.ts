import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-education-form',
  templateUrl: './education-form.component.html',
  styleUrls: ['./education-form.component.css']
})
export class EducationFormComponent {

  startYear = new FormControl("", [
    Validators.required,
    Validators.minLength (3)
  ])
  endYear = new FormControl("", [
    Validators.required,
    Validators.minLength (3)
  ])
  courseName = new FormControl("", [
    Validators.required,
    Validators.minLength (3)
  ])


educationForm = new FormGroup({
  startYear:this.startYear,
  endYear : this.endYear,
    birthDay  : this.courseName ,

})

  addEducation() {

  }
}
