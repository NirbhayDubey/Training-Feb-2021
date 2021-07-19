import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  private baseUrl = environment.baseUrl; //"https://localhost:44303/api/Home";
  
  
  constructor(private http : HttpClient) { }

  getTopQuestions(){
    return this.http.get(this.baseUrl + '/Home/topQuestions');
  }

  getAllQuestions(){
    return this.http.get(this.baseUrl + '/Home/allQuestions');
  }
  getQuestion(queid : number){
    return this.http.get(this.baseUrl +'/Home/question/' + queid);
  }

  searchQuestion(Que : string){
    
    return this.http.get(`${this.baseUrl}/Home/SearchQuetsion/${Que}`);
  }

}
