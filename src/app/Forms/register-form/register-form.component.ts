import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UserPost} from "../../../model/post/user";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {




  constructor(private apiService :ApiService,private router:Router) {
  }


  inSubmission= false

  username = new FormControl("", [
    Validators.required,
    Validators.minLength (3)
  ])
  email = new FormControl("",[
    Validators.required,
    Validators.email])


  phoneNumber = new FormControl("",[
    Validators.required,
    Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm)
  ])
  password = new FormControl("",[
    Validators.required,
    Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm)
  ])
  showAlert = false
  alertMsg =''

  alertColor ='blue'

  registerForm = new FormGroup({
    username: this.username,
    email: this.email,
    password: this.password,
  })

  register() {
  }


}

