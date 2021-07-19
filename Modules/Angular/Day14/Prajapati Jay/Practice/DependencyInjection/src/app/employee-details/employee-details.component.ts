import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  public employees : any;
  constructor(private _employeeService : EmployeeService) { }

  ngOnInit(){
    this.employees = this._employeeService.getEmployees();
  }

}
