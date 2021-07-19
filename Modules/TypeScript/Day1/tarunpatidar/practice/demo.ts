// ARRAY EXAMPLE

var fruits: Array<string> = ['A', 'Orange', 'Banana'];
fruits.sort();
console.log(fruits); 

console.log(fruits.pop());

fruits.push('Papaya');
console.log(fruits);

fruits = fruits.concat(['Fig', 'Mango']);
console.log(fruits);

console.log(fruits.indexOf('Papaya'));

var newArray=fruits.filter((fruits,i,arr)=>{
    return fruits.length<2
})

console.log(newArray)


// MULTI ARRAY EXAMPLE

let value: (string | number)[] = ['Apple', 2, 'Orange', 3, 4, 'Banana']; 
// or 
let values: Array<string | number> = ['Apple', 2, 'Orange', 3, 4, 'Banana']; 


// ARRAY ELEMENT USING LOOP EXAMPLE

let fruit: string[] = ['Apple', 'Orange', 'Banana']; 

for(var index in fruits)
{ 
    console.log(fruits[index]);  // output: Apple Orange Banana
}

for(var i = 0; i < fruits.length; i++)
{ 
    console.log(fruits[i]); // output: Apple Orange Banana
}


// NUMBER EXAMPLE

let first:number = 123; // number 
let second: number = 0x37CF;  // hexadecimal
let third:number=0o377 ;      // octal
let fourth: number = 0b111001;// binary  

console.log(first);  // 123 
console.log(second); // 14287
console.log(third);  // 255
console.log(fourth); // 57 


// TEMPLATE STRING EXAMPLE


let employeeName:string = "John Smith"; 
let employeeDept:string = "Finance"; 

// Pre-ES6 
let employeeDesc1: string = employeeName + " works in the " + employeeDept + " department."; 

// Post-ES6 
let employeeDesc2: string = `${employeeName} works in the ${employeeDept} department.`; 

console.log(employeeDesc1); 
console.log(employeeDesc2);


// ANY EXAMPLE

let identifer: any = value;
let val: any = 'Hi';
val = 555;
val = true;

function ProcessData(x: any, y: any){
    return x+y;
}

let result: any;
result = ProcessData("Hello ", "Any!");
result = ProcessData(2,3)