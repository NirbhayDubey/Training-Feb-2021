import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { UsersRoutingModule } from './users/users-routing.module';
import {environment} from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http : HttpClient) { }

  private baseUrl = environment.baseUrl;

  // httpHeaders = new HttpHeaders({
  //   'content-type' : 'application/json',
  //   'Authorization': 'dfahdufendcjnvadjbviusdnvail'
  // });

  // User Services
  getUserById(userId : number){
    return this.http.get(`${this.baseUrl}/Home/user/${userId}`);
  }

  getAllUsers(){
    return this.http.get(`${this.baseUrl}/Home/allUsers`);
  }

  getCurrentUser(){
    return this.http.get(this.baseUrl + '/User/current');
  }

  putUser(userId : number,user : any){
    return this.http.put(`${this.baseUrl}/User/${userId}`, user);
  }

  searchUser(user : string){
    return this.http.get(`${this.baseUrl}/Home/SearchUser/${user}`);
  }








  // Question-Asnwers Services 

  postQuestion(userId : number, que : any){
    return this.http.post(`${this.baseUrl}/${userId}/Question`, que);
  }

  postAnswer(userId : number , queId : number, ans : any){
    return this.http.post(`${this.baseUrl}/${userId}/Answer/${queId}`, ans);

  }

  giveUpVoteToQuestion(userId : number, queId : number){
    return this.http.get(`${this.baseUrl}/${userId}/Question/UpVote/${queId}`);
  }
  giveDownVoteToQuestion(userId : number, queId : number){
    return this.http.get(`${this.baseUrl}/${userId}/Question/DownVote/${queId}`);
  }
  bookmarkQuestion(userId : number, queId : number){
    return this.http.get(`${this.baseUrl}/${userId}/Question/Bookmark/${queId}`);
  }


  giveUpVoteToAnswer(userId : number, queId : number, ansId : number){
    return this.http.get(`${this.baseUrl}/${userId}/Answer/${queId}/UpVote/${ansId}`);
  }
  giveDownVoteToAnswer(userId : number, queId : number, ansId : number){
    return this.http.get(`${this.baseUrl}/${userId}/Answer/${queId}/DownVote/${ansId}`);
  }
  

  // Tags

  getAllTags(){
    return this.http.get(`${this.baseUrl}/Home/allTags`);
  }

  // Bookmarked Questions
  getBookmarked(userId : number){
    return this.http.get(`${this.baseUrl}/User/bookmarked/${userId}`);
  }

}
