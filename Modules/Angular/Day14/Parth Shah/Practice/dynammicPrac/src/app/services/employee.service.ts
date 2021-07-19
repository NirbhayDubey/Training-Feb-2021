import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employees : Array<Employee>=[{
    id:1,name:'Parth Shah',email:'abc@gmail.com',phone:78787787878
  },
{
  id:2,name:'Kush Shah',email:'efg@gmail.com',phone:78754687878

}];

public employeeList()
{
  return this.employees;
}

public addStudent(employee:Employee)
{
  this.employees.push(employee);
}
  constructor() { }
}
