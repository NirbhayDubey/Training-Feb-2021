import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private _baseUrl = environment.baseUrl;
  //private _registerUrl = "https://localhost:44303/api/authenticate/register";
  //private _loginUrl = "https://localhost:44303/api/authenticate/login";

  isLoggedIn : boolean = false;

  constructor(private http : HttpClient,private route : Router) { }

  registerUser(user : any){
    return this.http.post<any>(`${this._baseUrl}/authenticate/register`,user);
  }
  loginUser(user : any){
    return this.http.post(`${this._baseUrl}/authenticate/login`, user);
  }

  loggedIn(){ 
    return !!localStorage.getItem('token');
  }
  logoutUser(){
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    this.route.navigate(['']);
  }

  getToken(){
    return localStorage.getItem('token');
  }
}
