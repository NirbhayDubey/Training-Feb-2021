import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AnswersService {

  constructor(private http : HttpClient) { }

  private _baseUrl = environment.baseUrl;
  //private _url = "https://localhost:44303/api/Home";
  
  
  getAnswer(queid : number){
    return this.http.get(`${this._baseUrl}/Home/answers/${queid}`);
  }

  postAnswer(userid : number, queid : number, ans : any){
    return this.http.post(`${this._baseUrl}/${userid}/Answer/${queid}`, ans);
  }
  
}
