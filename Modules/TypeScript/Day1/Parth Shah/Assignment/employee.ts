export
// {city: 'Mumbai', area: 'goreaon'}
//creating employeee array which holds details of 5 employee:
var emp : any = [
    { id: 1, firstname: 'Jethalal',lastname: 'Gada', address: 'Powder Gali , Film city road , Mumbai' , salary: 5200 },
    { id: 2, firstname: 'Bhide',lastname: 'Aatmaram', address: 'Powder Gali , Film city road , Mumbai', salary: 5200 },
    { id: 3, firstname: 'krushnan',lastname: 'iyer', address: 'Powder Gali , Film city road , Mumbai', salary: 5200 },
    { id: 4, firstname: 'Taarak',lastname: 'Mehta', address: 'Powder Gali , Film city road , Mumbai', salary: 8200 },
    { id: 5, firstname: 'Hathi',lastname: 'sathi', address: 'Powder Gali , Film city road , Mumbai', salary: 5200 }
  ];

//merging two arrays :

  console.log('\n\n======================================================================================');
var newEmp :any = [
    { id: 10, firstname: 'Popat',lastname: 'pandey', address: 'Powder Gali , Film city road , Mumbai', salary: 5200 },
    { id: 11, firstname: 'iyer',lastname: 'idli', address: 'Powder Gali , Film city road , Mumbai', salary: 4200 }
  
  ];

  var empNewemp = emp.concat(newEmp); 
console.log("empNewemp : " , empNewemp );


  //========Get all employee data =====:
  function GetEmployeeData(){
    console.log(emp);
    return emp;
}




//searching employee by index number :
// console.log('======================================================================================');
// console.log('\n searching employee by index number ');
// console.log('Employee 1:' ,emp[0]);
// console.log('Employee 2:' ,emp[1]);
// console.log('Employee 3:' ,emp[2]);
// console.log('Employee 4:' ,emp[3]);
// console.log('Employee 5:' ,emp[4]);

//insert new employee:


//insert the employee using push method ;
console.log('\n\n======================================================================================');

function InsertEmp() : void {
  //1. using push method
console.log('insert the employee using push method');
emp.push({id: 6, firstname: 'champak',lastname: 'gada', address: 'Powder Gali , Film city road , Mumbai', salary: 10200});
console.log(emp);

//2. using splice method;
  console.log('\n\n======================================================================================');
console.log('insert the employee using splice method');
var added = emp.splice(5,1,{id: 7, firstname: 'asit',lastname: 'modi', address: 'Powder Gali , Film city road , Mumbai', salary: 50200});
console.log("After adding  : " ,emp );  
console.log("Added is: " ,added);

//3. using unshift array add employee in begiinig  ;

console.log('insert the employee using unshift method');
console.log('======================================================================================');
var addBegining = emp.unshift({id: 8, firstname: 'daya',lastname: 'gada', address: 'Powder Gali , Film city road , Mumbai', salary: 8200});
console.log("Returned array is : " , emp);


}

//delete the employee :

function deleteEmp(id):void 
{
  //1. if you have to delete any employee using index :
  var remove = emp.splice(3,1);

// syntax: array.splice(index, howMany, [element1][, ..., elementN]);

console.log('\n\n======================================================================================');
console.log("After removing : " ,emp );  
console.log("removed is: " ,remove);


//2. remove the employee of array using its id:
console.log('\n\n======================================================================================');
 emp.pop(id);

//3. remove the first employee of array :

console.log('\n\n======================================================================================');
var removeFirst = emp.shift();
console.log("employee  is : " , removeFirst ); 


}


//find full name of employee:
function findfullName() {
  console.log('\n\n======================================================================================');
  console.log('Return full name of employee:')
  console.log("======================================================================================");

  for (var fullName of emp) {
    // var fname = fullName.firstname;
    // var lname = fullName.lastname;
    // var wholeName = `${fname} ${lname}`;
    // return wholeName;
    
    var fname = fullName.firstname;
    var lname = fullName.lastname;
    console.log( `${fname} ${lname}`);
    // var empfullname = fullName.firstname +" "+fullName.lastname;
    // console.log(empfullname);
    

  }

}

function extractAdd(){
  console.log('\n\n======================================================================================');
  console.log('Employee address splitted :');

  for (var empAdd of emp)
  {
    var addr = empAdd.address;
    var splliting = addr.split(',',3);
    console.log(splliting);

  }
}


//Find Pf Employee:
function employeePF(){
  console.log("\n\n======================================================================================");
  for(var empPf of emp ){
      var fullname = empPf.firstname+" "+empPf.lastname;
      
      var salaryEmp = empPf.salary*(0.12); 
      var getsalary = empPf.salary - salaryEmp;
      console.log("Pf cut is :" ,salaryEmp);
      console.log(` Full name is : ${fullname} and Final Salary is : ${getsalary}`);        
     
  }
}

//calling every functions :

InsertEmp();
deleteEmp(2);
findfullName();
extractAdd();
employeePF();