//other type declaraion
var empId = 1;
var empName = "Steve";
// Tuple type variable 
var employee = [1, "Steve"];
//we can declare an array of tuple also.
var user; // declare tuple variable
user = [[1, "Steve", true, 20, "Admin"], [2, "Job", true, 20, "user"]];
console.log('==============================================================');
// console.log(user);
function GetEmployeeData() {
    console.log(user);
    return user;
}
GetEmployeeData();
//Accessing Tuple Elements :
console.log('==============================================================');
var employee = [1, "Steve"];
console.log(employee[0]); // returns 1
console.log(employee[1]); // returns "Steve"
//Add elements into tuple ;
console.log('==============================================================');
var employee = [1, "Steve"];
employee.push(2, "Bill");
console.log(employee); //Output: [1, 'Steve', 2, 'Bill']
console.log('==============================================================');
// retrieving value by index and performing an operation 
employee[1] = employee[1].concat(" Jobs");
console.log(employee); //Output: [1, 'Steve Jobs']
console.log(employee[1]);
var index = employee.indexOf("Bill");
console.log("index is : " + index);
console.log('==============================================================');
//updating tuple :
var mytuple = [10, "Hello", "World", "typeScript"]; //create a  tuple 
console.log("Tuple value at index 0 " + mytuple[0]);
//update a tuple element 
mytuple[0] = 121;
console.log("Tuple value at index 0 changed to   " + mytuple[0]);
console.log('==============================================================');
//Tuple Operation ;
var mytuple = [10, "Hello", "World", "typeScript"];
console.log("Items before push " + mytuple.length); // returns the tuple size 
mytuple.push(12); // append value to the tuple 
console.log("Items after push " + mytuple.length);
console.log("Items before pop " + mytuple.length);
console.log(mytuple.pop() + " popped from the tuple"); // removes and returns the last item
console.log("Items after pop " + mytuple.length);
