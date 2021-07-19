// Class Example

class book
{
    id: number;
    name: string;
    author: string;
    constructor(id: number,name: string,author:string)
    {
        this.id=id;
        this.name=name;
        this.author=author;
    }
    display()
    {
        return `ID is ${this.id} Name ${this.name} Author is ${this.author}`
    }
}

var bk=new book(1, "C", "Authorname");
var bk1=new book(2,"abc","ab");

var bookarray: book[]=[];
bookarray.push(bk);
bookarray.push(bk1);
for (var obj of bookarray)
{
    console.log(obj.display());
}


// Interface Example

interface IEmployee{
    empCode: number;
    name: string;
    getSalary: (number) => number;
}

class Employee1  implements IEmployee {
    empCode: number;
    name: string;

    constructor(code: number, name: string){
        this.empCode = code;
        this.name = name;
    }

    getSalary(empCode:number):number{
        return 20000;
    }
}

let emp1 = new Employee1(1,"Steve");
console.log (emp1.getSalary(20000))


// Interface As Function Type

interface KeyValueProcessor{
    (Key: number, Value: string): void;
};

function addKeyValue(Key: number, Value: string): void{
    console.log('addKeyValue: Key = '+ Key +', Value = '+ Value)
}

let Kvp: KeyValueProcessor = addKeyValue;
Kvp(1,"Bill");



// Interface For Array Type

interface NumList
{
    [index:number]:number
}

let numArr: NumList = [1, 2, 3];
numArr[0];
numArr[1];

console.log(numArr[0], numArr[1])


// Enum Example

enum Color
{
 
    Red, Green, Blue
  
};
  
console.log(Color.Blue);