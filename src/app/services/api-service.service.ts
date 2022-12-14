import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserPost} from "../models/UserPost";
import {Observable} from "rxjs";
import {LoginUser} from "../models/LoginUser";



@Injectable({
  providedIn: 'root'
})
export class ApiService {
 BASE_URL = 'http://localhost:8048'
  constructor(private httpClient:HttpClient) { }
  registerUser (user :UserPost):Observable<any> {
   return  this.httpClient.post(`${this.BASE_URL}/api/register/user`, user)
  }
  authenticateUser (user :LoginUser):Observable<any> {
   return  this.httpClient.post(`${this.BASE_URL}/api/register/user`, user)
  }
  // addAboutMe(aboutMe :AboutMe){
  //
  // }
}
