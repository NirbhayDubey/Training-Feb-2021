//Array
var list: number[] = [1, 3, 5];

for(var index in list)
{
    document.getElementById("app").innerHTML += `${list[index]} `;
}
document.getElementById("app").innerHTML += "<br>";

var list1: Array<number> = [1, 3, 5];

for(var value of list1)
{
    document.getElementById("app").innerHTML += `${value} `;
}
document.getElementById("app").innerHTML += "<br>";

// multi type array
var list2: (string | number)[] = ['Apple', 2, 'Orange', 4, 7];

for(var i=0; i<list2.length; i++)
{
    document.getElementById("app").innerHTML += `${list2[i]} `;
}
document.getElementById("app").innerHTML += "<br>";

var list3: Array<string|number> = ['Apple', 3, 'Orange', 4, 7];

for(var i=0; i<list3.length; i++)
{
    document.getElementById("app").innerHTML += `${list3[i]} `;
}
document.getElementById("app").innerHTML += "<br>";

// sort()
var fruits: Array<string> = ['Apple', 'Orange', 'Banana']; 
fruits.sort(); 
console.log(fruits); //output: [ 'Apple', 'Banana', 'Orange' ]

// pop()
console.log(fruits.pop()); //output: Orange

// push()
fruits.push('Papaya'); 
console.log(fruits); //output: ['Apple', 'Banana', 'Papaya']

// concat()
fruits = fruits.concat(['Fig', 'Mango']); 
console.log(fruits); //output: ['Apple', 'Banana', 'Papaya', 'Fig', 'Mango'] 

fruits = fruits.concat('Kiwi', 'Pear', 'Orange', 'Grape');
console.log(fruits);

// filter()
var newArray=fruits.filter((fruits,i,arr)=>{
    return fruits.length<6;
});

console.log(newArray);

// multi-dimensional array
var mArray:number[][] = [[1,2,3],[5,6,7]] ;  
console.log(mArray[0][0]);  
console.log(mArray[0][1]);  
console.log(mArray[0][2]);  
console.log();  
console.log(mArray[1][0]);  
console.log(mArray[1][1]);  
console.log(mArray[1][2]);  

let arr1:string[] = new Array("JavaTpoint", "2300", "Java", "Abhishek");   
//Passing arrays in function  
function display(arr_values:string[]) {  
   for(let i = 0;i<arr_values.length;i++) {   
      console.log(arr1[i]);  
   }    
}  
//Calling arrays in function  
display(arr1);

//-------------------------------------------//
// number variable
var age:number=35;
document.getElementById("app").innerHTML += age + "<br>";

// string variable
var message:string="Hello";
document.getElementById("app").innerHTML += message + "<br>";

// boolean variable
var isUpdated:boolean=true;
document.getElementById("app").innerHTML += isUpdated + "<br>";

// null
var n: null = null;
document.getElementById("app").innerHTML += n + "<br>";

// boolean
var isPresent:boolean = true;
document.getElementById("app").innerHTML += isPresent + "<br>";

// any
let something: any = "Hello World!";
document.getElementById("app").innerHTML += something + "<br>";

something = 23;
document.getElementById("app").innerHTML += something + "<br>";

something = true;
document.getElementById("app").innerHTML += something + "<br>";

let arr: any[] = ["John", 212, true]; 
arr.push("Smith"); 
console.log(arr); //Output: [ 'John', 212, true, 'Smith' ] 

let val: any = 'Hi';
document.getElementById("app").innerHTML += val + "<br>";

val = 555;
document.getElementById("app").innerHTML += val + "<br>";

val = true;
document.getElementById("app").innerHTML += val + "<br>";

function ProcessData(x: any, y: any): any{
    return x+y;
}

// String

// Template Strings
let employeeName:string = "John Smith"; 
let employeeDept:string = "Finance"; 

// Pre-ES6 
let employeeDesc1: string = employeeName + " works in the " + employeeDept + " department."; 

// Post-ES6 
let employeeDesc2: string = `${employeeName} works in the ${employeeDept} department.`; 

console.log(employeeDesc1);//John Smith works in the Finance department. 
console.log(employeeDesc2);//John Smith works in the Finance department. 

// charAt()
document.getElementById("app").innerHTML += employeeName.charAt(3) + "<br>";

// concat()
document.getElementById("app").innerHTML += employeeName.concat(", ", employeeDept) + "<br>";

//indexOf()
document.getElementById("app").innerHTML += employeeName.indexOf("Sm") + "<br>";

// replace()
document.getElementById("app").innerHTML += employeeName.replace("Smith", "Doe") + "<br>";

// split()
document.getElementById("app").innerHTML += employeeName.split(' ') + "<br>";

// toUpperCase()
document.getElementById("app").innerHTML += employeeName.toLocaleUpperCase() + "<br>";

// toLowerCase()
document.getElementById("app").innerHTML += employeeName.toLocaleLowerCase() + "<br>";

// includes()
document.getElementById("app").innerHTML += employeeName.includes("John") + "<br>";

// endsWith()
document.getElementById("app").innerHTML += `${employeeName.endsWith("Smith")}<br>`;

// lastIndexOf()
document.getElementById("app").innerHTML += `${employeeName.lastIndexOf("Smith")}<br>`;

document.getElementById("app").innerHTML += `${employeeDept.localeCompare("finance")}<br>`;

// repeat()
document.getElementById("app").innerHTML += `${employeeName.repeat(3)}<br>`;

// search()
document.getElementById("app").innerHTML += `${employeeName.search("smith")}<br>`;

// slice()
document.getElementById("app").innerHTML += `${employeeName.slice(1,7)}<br>`;

// startsWith()
document.getElementById("app").innerHTML += `${employeeName.startsWith("John")}<br>`;

// substr()
document.getElementById("app").innerHTML += `${employeeName.substr(0,7)}<br>`;

// substring()
document.getElementById("app").innerHTML += `${employeeName.substring(0,7)}<br>`;

// trim()
document.getElementById("app").innerHTML += `${employeeName.trim()}<br>`;