"use strict";
//unioun practices
exports.__esModule = true;
exports.printId = void 0;
function printId(id) {
    console.log("Your ID is: " + id);
}
exports.printId = printId;
printId(101);
//unioun type variable :
var val;
val = 12;
console.log("numeric value of val " + val);
val = "Parth";
console.log("Hello! " + val);
console.log('==================================================================================================');
//unioun type and function parameter
function disp(name) {
    if (typeof name == "string") {
        console.log(name);
    }
    else {
        var i;
        for (i = 0; i < name.length; i++) {
            console.log(name[i]);
        }
    }
}
disp("mark");
console.log("Printing names array....");
disp(["Mark", "Tom", "Mary", "John"]);
console.log('=======================================Another example=====================================');
function displayType(code) {
    if (typeof (code) === "number")
        console.log('Code is number.');
    else if (typeof (code) === "string")
        console.log('Code is string.');
}
displayType(123); // Output: Code is number.
displayType("ABC"); // Output: Code is string.
//unioun type and arrays :
console.log('==================================================================================================');
var arr;
var i;
arr = [1, 2, 4];
console.log("**numeric array**");
for (i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
arr = ["Mumbai", "Pune", "Delhi"];
console.log("**string array**");
for (i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
