import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  logger(msg : any){
    console.log(new Date() + " ; " + JSON.stringify(msg));
  }
}
