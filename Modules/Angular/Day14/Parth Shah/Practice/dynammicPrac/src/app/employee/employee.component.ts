import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employee:Employee = {id:0,name:'',email:'',phone:0};
  constructor(private EmployeeService : EmployeeService) { 
    this.employees=EmployeeService.employeeList();
  }
  employees : Array<Employee>=[];

  ngOnInit(): void {
  }

  submitData()
  {
    this.EmployeeService.addStudent(this.employee);
  }

}
