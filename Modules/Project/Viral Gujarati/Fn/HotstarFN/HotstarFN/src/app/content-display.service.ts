import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Content } from './content-display';
import{ environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ContentDisplayService {

  private apiServer =  `${environment.baseUrl}/content`;


  // "https://localhost:44308/api/content";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }



  getById(id:number): Observable<Content> {
    return this.httpClient.get<Content>(this.apiServer + '/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  getContentById(contentid:number){
    return this.httpClient.get(`${this.apiServer}/${contentid}` )
  }


  getAll(): Observable<Content[]> {
    return this.httpClient.get<Content[]>(this.apiServer)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  errorHandler(error: { error: { message: string; }; status: any; message: any; }) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     console.log(errorMessage);
     return throwError(errorMessage);
  }
}
