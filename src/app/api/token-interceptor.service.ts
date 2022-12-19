import {Injectable, Injector} from '@angular/core';
import {HttpEvent, HttpHandler, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {ApiService} from "./api.service";

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService {

  constructor(private  inject:Injector) {
  }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // 'http://localhost:8048/api/v1/register/user'
    let url  = request.url.split('/').slice(-3).join('/')
    let apiService = this.inject.get(ApiService)
    console.log(url)
    if (url !== 'v1/register/user' && url !== 'api/v1/authenticate'){
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

