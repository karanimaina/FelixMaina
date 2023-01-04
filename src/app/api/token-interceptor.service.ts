import {Injectable, Injector} from '@angular/core';
import {HttpEvent, HttpHandler, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {ApiService} from "./api.service";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService {

  constructor(private  inject:Injector) {
  }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // 'http://localhost:8048/api/v1/register/user'
    let userUrl= request.url.split('/').slice(-2).join('/')
    let url  = request.url.split('/').slice(-3).join('/')
    let apiService = this.inject.get(ApiService)
    console.log(url)
    if (url !== 'v1/register/user' && url !== 'api/v1/authenticate' && url !=='users/karanimaina/repos?sort=created&direction=desc??access_token='+ environment.apiKey&& userUrl!=='users/karanimaina??access_token='+environment.apiKey){
      let access_token = request.clone({
        setHeaders: {
          Authorization: 'Bearer '+apiService.getToken()
        }
      });
      console.log(url)
      return next.handle(access_token)
    }
    return next.handle(request)


  }}

