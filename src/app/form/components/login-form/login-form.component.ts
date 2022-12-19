import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ApiService} from "../../../services/api-service.service";
import {LoginUser} from "../../../models/LoginUser";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  showAlert = false
  inSubmission = true
  // user :LoginUser

  alertMsg ='Please wait! your account is being created'
  alertColor ='blue'


  constructor( private api :ApiService,private  router :Router) { }
  username = new FormControl("", [
    Validators.required,
    Validators.minLength (3)
  ])
  password = new FormControl("",[
    Validators.required,
    Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm)
  ])
  loginForm = new FormGroup({
    username: this.username,
    password: this.password,
  })
  ngOnInit(){}

  login() {
    try {
      this.showAlert = true
      this.alertMsg = 'Please wait! your account is being created'
      this.alertColor = 'blue'
      this.router.navigate(['/nav'])
      // this.inSubmission = false
      // this.user = new LoginUser(this.username.value,this.password.value)
      // this.api.authenticateUser(this.user).subscribe((res:any)=> {
      //   debugger
      //   console.log("res",res)
      //   localStorage.setItem("access_token",res.access_token)
      //   this.goToHome()
      //
      // })
    }catch (e) {
      this.showAlert = true
      this.alertMsg = 'error'
      this.alertColor = 'red'
      // this.inSubmission = false
    }
    this.showAlert = true
    this.alertMsg = 'success, your account details has been saved'
    this.alertColor = 'green'
  }
submit(){

}

  GoToSignUp() {
    this.router.navigate(["/sign"])
  }
}
