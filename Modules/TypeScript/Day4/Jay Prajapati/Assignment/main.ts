import {employee, checkingEmpByID} from './EmpData';


let a = new checkingEmpByID();

let option : number = 1 ; //you can change your case from here
switch(option) {

case 1: console.log('Get details of Employee by its ID:');
a.applicantsById(2);
break;

case 2: console.log('Get details of employee who has joined after 2020:')
a.SerchByDob();

case 3:console.log('Search the employee who has joined after year 2020 and stays in Rajkot city:')
a.EmpDob();
}