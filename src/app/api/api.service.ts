import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../model/user";
import {Observable} from "rxjs";
import {LoginUser} from "../models/LoginUser";
import {AboutMe} from "../model/AboutMe";



@Injectable({
  providedIn: 'root'
})
export class ApiService {
  BASE_API = 'http://localhost:8048'

  constructor(private httpClient:HttpClient) { }
  CreateUser(user:User):Observable<any>{
    return  this.httpClient.post<User>(`${this.BASE_API}/api/v1/register/user`,user)
  }
  proceedLogin(userCred: LoginUser) {
    return this.httpClient.post(`${this.BASE_API}/api/v1/authenticate`, userCred)
  }
  getToken(){
    return localStorage.getItem("access_token") || ''
  }
  postAboutMe(about:AboutMe){
    return this.httpClient.post(`${this.BASE_API}api/v1/aadd/aboutMe` ,about)
  }
}
