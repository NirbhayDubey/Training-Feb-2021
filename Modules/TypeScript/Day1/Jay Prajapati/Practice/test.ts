export {}
let message = 'Hello World';
let mess = 'Welcome Back';
console.log(message);

let x = 10;
const y = 20;
let sum;
const title = 'TypeScript';
let isBeginner: boolean = true;
let total: number = 0;
let name: string = 'jay';
//name = true;


//multiple line with embeded expression
//templet string
let st: string = `My name is ${name}
I am a beginner in TypeScript`;

console.log(st);

let n: null = null;
let u: undefined = undefined;

let isNew: boolean = null;
let myName: string = undefined;


// array
let list1: number[] = [1,2,4];
let list2: Array<number> = [1,2,3];

let person1:[string, number] = ['jay',22];

enum Color{red = 5,green,blue};
let c:Color = Color.green;
console.log(c);


// any type

let randomValue: any = 10;
randomValue = true;
randomValue = "TypeScript";

let myVariable: unknown = 10;

function hasName(obj: any):obj is {name: string}{
    return !!obj && typeof obj === "object"&&
    "name" in obj
}

if(hasName(myVariable)){
    console.log(myVariable.name);
}

//myVariable();
(myVariable as string).toUpperCase();

let a;
a = 10;
a =true;

let b = 20;
//b = true;

let multiType:number|boolean;
multiType = 20;
multiType = true;

