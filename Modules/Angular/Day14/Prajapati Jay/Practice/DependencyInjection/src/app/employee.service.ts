import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }
  getEmployees(){
    return [ {"id":1,"name":"Andrew","age":23},
      {"id":2,"name":"Brandon","age":25},
      {"id":3,"name":"Chiristina","age":30},
      {"id":4,"name":"Elena","age":22},
      {"id":5,"name":"AndrJohnew","age":28}
    ];
  }
}
