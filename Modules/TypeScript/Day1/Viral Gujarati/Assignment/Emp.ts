var emp:any = [
    {Id:1, FirstName:"Viral", LastName:"Gujarati", Address:"21,Rajkot", Salary: 20000},
    {Id:2, FirstName:"Rahul", LastName:"Raval", Address:"22,Surat", Salary: 21000},
    {Id:3, FirstName:"Krishna", LastName:"Gabani", Address:"33,Gondal", Salary: 15000},
    {Id:4, FirstName:"Radha", LastName:"Patel", Address:"32,Rajkot", Salary: 16000},
    {Id:5, FirstName:"Mayur", LastName:"Patel", Address:"25,Ahmedabad", Salary: 25000}
];

var newEmp :any = [
    { Id: 6, FirstName: 'virat',LastName: 'dave', Address: '45,surat', Salary: 14500 }
  
];

var empNewemp = emp.concat(newEmp); 
console.log("empNewemp : " , empNewemp );


//employee data =====:
function GetEmployeeData(){
  console.log(emp);
  return emp;
}

function InsertEmp() : void {
  //using push method
console.log('Add Employee using Push');
emp.push({Id: 6, FirstName: 'Mahesh',LastName: 'rana', Address: '23,Vadodra', Salary: 10000});
console.log(emp);

}

//Delete employee
function Deleteemp(){
return emp.pop();
}

//find full name of employee:
function findfullName() {
  console.log('FullName:')

  for (var fullName of emp) {
     var fname = fullName.FirstName;
    var lname = fullName.LastName;
    console.log( `${fname} ${lname}`);
  }
}

function extractAdd(){
  console.log('Split Employee Address :');

  for (var empAdd of emp)
  {
    var addr = empAdd.Address;
    var splliting = addr.split(',');
    console.log(splliting);

  }
}

//Find Pf Employee:
function employeePF(){
  for(var empPf of emp ){
      var fullname = empPf.FirstName+" "+empPf.LastName;
      
      var SalaryEmp = empPf.Salary*(0.20); 
      var getSalary = empPf.Salary - SalaryEmp;
      console.log("Pf cut is :" ,SalaryEmp);
      console.log(` Full name is : ${fullname} and Final Salary is : ${getSalary}`);        
     
  }
}

InsertEmp();
findfullName();
Deleteemp();
extractAdd();
employeePF();



// //get employees
// function GetEmp():void{

//     for(var emp in employee)
//     {
//         var newaddress: string[] = employee[emp].Address.split(',');
//     }
// }

// console.log(employee);

// //GET info based on index

// function index():void{

    
// }

// Do the operation searching by indexnumber, EmployeeID, Insert the employee, delete the employee from the Array.
//1.serching 
//console.log("Emmployee:",emp[1])
//2.Insert
//emp.push({Id:6, FirstName:"Jay",LastName:"patel",Address:"Goa",Salary:23000})
//3.Delete
//emp.pop(emp)
// Create one more array emp and join the value with above array. When display list combine firstname and lastname as fullname,
// //new array
// var newemp = [
//    {Id:1, FirstName:"Kunal", LastName:"Patel", Address:"Ahmedabad", Salary: 22000}

// ];

// var employee = emp.concat(newemp);

// console.log("employee:",employee);

// var fname = emp[0].FirstName;
// var lname = emp[0].LastName;

// function fullname(){
//     var fullname = `${fname}${lname}`;
//     return fullname;
// }

// console.log(fullname());
// From the address field flatnumber,city,state and should be splited.
//PF should be computed and total salary should be display

