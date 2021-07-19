import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {

  employee:Employee = {id:0,name:'',email:'',phone:0};
  constructor(private EmployeeService : EmployeeService) {
    this.employees=EmployeeService.employeeList();
   }
   employees : Array<Employee>=[];
   id:0;
   name:"";
   email:"";
   phone:0;

   edit(item)
  {
    this.id = item.id;
  this.name = item.name;
  this.email = item.email;
  this.phone = item.phone;
  }

  remove(index)
  {
   this.EmployeeService.employees.splice(index,1);
  }

  update()
  {
var item = this.EmployeeService.employees.find(a=>a.id==this.id);
item.name = this.name;
item.email = this.email;
item.phone = this.phone;
  }
  ngOnInit(): void {
  }

}
