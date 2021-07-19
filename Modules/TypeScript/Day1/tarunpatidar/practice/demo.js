// ARRAY EXAMPLE
var fruits = ['A', 'Orange', 'Banana'];
fruits.sort();
console.log(fruits);
console.log(fruits.pop());
fruits.push('Papaya');
console.log(fruits);
fruits = fruits.concat(['Fig', 'Mango']);
console.log(fruits);
console.log(fruits.indexOf('Papaya'));
var newArray = fruits.filter(function (fruits, i, arr) {
    return fruits.length < 2;
});
console.log(newArray);
// MULTI ARRAY EXAMPLE
var values = ['Apple', 2, 'Orange', 3, 4, 'Banana'];
// or 
var values = ['Apple', 2, 'Orange', 3, 4, 'Banana'];
// ARRAY ELEMENT USING LOOP EXAMPLE
var fruits = ['Apple', 'Orange', 'Banana'];
for (var index in fruits) {
    console.log(fruits[index]); // output: Apple Orange Banana
}
for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]); // output: Apple Orange Banana
}
// NUMBER EXAMPLE
var first = 123; // number 
var second = 0x37CF; // hexadecimal
var third = 255; // octal
var fourth = 57; // binary  
console.log(first); // 123 
console.log(second); // 14287
console.log(third); // 255
console.log(fourth); // 57 
// TEMPLATE STRING EXAMPLE
var employeeName = "John Smith";
var employeeDept = "Finance";
// Pre-ES6 
var employeeDesc1 = employeeName + " works in the " + employeeDept + " department.";
// Post-ES6 
var employeeDesc2 = employeeName + " works in the " + employeeDept + " department.";
console.log(employeeDesc1);
console.log(employeeDesc2);
// ANY EXAMPLE
var identifer = value;
var val = 'Hi';
val = 555;
val = true;
function ProcessData(x, y) {
    return x + y;
}
var result;
result = ProcessData("Hello ", "Any!");
result = ProcessData(2, 3);
