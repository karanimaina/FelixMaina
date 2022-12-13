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
  user:UserPost
  alertColor ='blue'

  registerForm = new FormGroup({
    username: this.username,
    email: this.email,
    password: this.password,
  })

  register() {
    this.showAlert = true
    this.alertMsg = 'Please wait! your account is being created'
    this.alertColor = 'blue'
    this.inSubmission = true
    this.user = new UserPost(this.username.value,this.email.value,this.phoneNumber.value,this.phoneNumber.value)
    try {
      this.apiService.postUser(this.user).subscribe(
        data => this.goToHome());
      this.showAlert = true
      this.alertMsg = 'success, your account details has been saved'
      this.alertColor = 'green'
    }catch (e) {
      this.showAlert = true
      this.alertMsg = 'kindly use another usernem'
      this.alertColor = 'red'
      this.inSubmission = false
    }

  }

  goToHome() {
    this.router.navigate(["/home"]);
  }

}

