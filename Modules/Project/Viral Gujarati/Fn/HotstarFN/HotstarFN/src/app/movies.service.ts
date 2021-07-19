import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Movie } from './movie';
import{ environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private apiServer = `${environment.baseUrl}/movie`;
  // "https://localhost:44308/api/movie";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }


  // getById(id): Observable<Movie> {
  //   return this.httpClient.get<Movie>(this.apiServer + '/movies/' + MovieId)
  //   .pipe(
  //     catchError(this.errorHandler)
  //   )
  // }


  
  getAllMovie(): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(this.apiServer)
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
