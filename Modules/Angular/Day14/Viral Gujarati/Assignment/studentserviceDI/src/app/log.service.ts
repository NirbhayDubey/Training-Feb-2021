import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor() { }
  logs: string[] = [];
  log(message:string){
    this.logs.push(`${message} Method Executed`);
    console.log(`${message} Method Executed`);
  }
}
