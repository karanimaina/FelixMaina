import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../model/user";
import {Observable} from "rxjs";
import {LoginUser} from "../models/LoginUser";
import {AboutMe} from "../model/AboutMe";
import {ApiUserResponse} from "../repo/model/ApiUserResponse";
import {environment} from "../../environments/environment";
import {ApiRepoResponse} from "../repo/model/ApiRepoResponse";



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
  // https://api.github.com/users/karanimaina??access_token=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
  getUserData(){
   return  this.httpClient.get<ApiUserResponse>(environment.apiUrl + '/' + 'karanimaina' + '??access_token=' + environment.apiKey)
  }
  getUserRepo(){
    return this.httpClient.get<ApiRepoResponse>(environment.apiUrl + '/' + 'karanimaina' + '/repos?sort=created&direction=desc??access_token=' + environment.apiKey)
  }
}
