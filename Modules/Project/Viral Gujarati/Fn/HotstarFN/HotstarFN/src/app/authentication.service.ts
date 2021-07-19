import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import{ environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  // url from api
  // private _registerUrl = "https://localhost:44303/api/Authenticate/register";
  // private _loginUrl = "https://localhost:44308/api/Authenticate/login";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


  private Url = environment.baseUrl; 
  // "https://localhost:44308/api";

  constructor(private http : HttpClient) { }

  login(data: any):Observable<any>{
    return this.http.post(`${this.Url}/authenticate/login`,data);
      }

  register(data: any):Observable<any>{
    return this.http.post(`${this.Url}/authenticate/register`,data);
  }
//true flase 
  loggedIn(){
    return !!localStorage.getItem('token');
  }



  // registerUser(user : any){
  //   return this.http.post<any>(this._registerUrl,user);
  // }
  // loginUser(user : any){
  //   return this.http.post(this._loginUrl, user);
  // }
  // loggedIn(){
  //   return !!localStorage.getItem('token');
  // }

  // getToken(){
  //   return localStorage.getItem('token');
  // }
}
