"use strict";
exports.__esModule = true;
var EmpData_1 = require("./EmpData");
var a = new EmpData_1.checkingEmpByID();
var option = 1; //you can change your case from here
switch (option) {
    case 1:
        console.log('Get details of Employee by its ID:');
        a.applicantsById(2);
        break;
    case 2:
        console.log('Get details of employee who has joined after 2020:');
        a.SerchByDob();
    case 3:
        console.log('Search the employee who has joined after year 2020 and stays in Rajkot city:');
        a.EmpDob();
}
