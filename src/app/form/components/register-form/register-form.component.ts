import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UserPost} from "../../../models/UserPost";
import {ApiService} from "../../../api/api.service";
import {User} from "../../../model/user";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {

  user :User


  constructor(private apiService :ApiService,private router:Router) {
  }

  // user : UserPost
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
    Validators.pattern(/(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})/gm)
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
    phoneNumber:this.phoneNumber,
    password: this.password,
  })

  register() {
    this.user= new User(this.username.value!, this.email.value!,this.phoneNumber.value!,this.password.value!)
    try {
      this.apiService.CreateUser(this.user).subscribe((res:any)=> {
        this.router.navigate(['/login'])
    })

  }catch (e){
    this.alertMsg= 'user already exist'
      this.alertColor = 'red'
    }
  }

  GoToLogin() {
    this.router.navigate(['/login'])
  }
}

