import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Subscribe } from './subscribe';
import { DatePipe } from '@angular/common';
import{ environment } from '../environments/environment';




@Injectable({
  providedIn: 'root'
})
export class SubscribeService {

  sub:any;

  private apiServer = `${environment.baseUrl}/subscription`;

  //  "https://localhost:44308/api/subscription";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }

  // create(product): Observable<Subscribe> {
  //   return this.httpClient.post<Product>(this.apiServer + '/products/', JSON.stringify(product), this.httpOptions)
  //   .pipe(
  //     catchError(this.errorHandler)
  //   )
  // // }

  getById(id): Observable<Subscribe[]> {
    return this.httpClient.get<Subscribe[]>(this.apiServer + '/Subscribe/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  getAll(): Observable<Subscribe[]> {
    return this.httpClient.get<Subscribe[]>(this.apiServer)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  DoSubscribe(customerId:number, planId:number){
  
  this.sub = {
    CustomerId:customerId,
    PlanId:planId,
    DateOfSubscription: new Date()
    // ValidThrough: new Date(year +1,month,day)
  }
  return this.httpClient.post(`${this.apiServer}`,this.sub);
  }

  // update(id, product): Observable<Product> {
  //   return this.httpClient.put<Product>(this.apiServer + '/products/' + id, JSON.stringify(product), this.httpOptions)
  //   .pipe(
  //     catchError(this.errorHandler)
  //   )
  // }

  // delete(id){
  //   return this.httpClient.delete<Product>(this.apiServer + '/products/' + id, this.httpOptions)
  //   .pipe(
  //     catchError(this.errorHandler)
  //   )
  // }
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
