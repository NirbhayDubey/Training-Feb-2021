function greeter(fn: (a:string)=>void){
    fn("Hello, World");
}
function printToConsole(s: string){
    console.log(s);
}
greeter(printToConsole);

//call Signatures

type DescribableFunction = {
    description : string;
    (someArg: number): boolean;
};
function doSomething(fn: DescribableFunction){
    console.log(fn.description + " returned " + fn(6));
}

function GetAllBook(){
    let books = [
        {title : "Book1", Author : "Author1" , Available : true},
        {title : "Book2", Author : "Author2" , Available : false},
        {title : "Book3", Author : "Author3" , Available : true},
        {title : "Book4", Author : "Author4" , Available : false}
    ];
    return books;
}

let allbook = GetAllBook();
let v = allbook.forEach((val,index,arr)=>console.log(++index + " - "+ val.title));

function publicationMessage(year:number):string{
    return "Published year : " + year;
}

 let fun:(someYear : number) =>string;
 fun = publicationMessage;
 let message : string = fun(2020);


//Optional parameter
function CreateCustomer(name:string, Age?:number):string{
    return name + Age;
}
console.log(CreateCustomer("Jay", 23));
console.log(CreateCustomer("John"));

//Default Parameter

function CreateCust(name:string, work:string = 'Worker'):string{
    return name + "  " + work;

}
console.log(CreateCust("John"));

// Rest Parameters

function createBook(name:string,...id:number[]):string{
    let s = id.join(',');
    //let v = id.forEach((val,index,arr)=>(++index+ " "+val.valueOf() ));
    return name + " " + s ;
}
console.log(createBook("book1",1,2,3,4,5,6,7,8));


// Function Overloading

function GetTitle(Auther : string);
function GetTitle(Available : boolean);

function GetTitle(bookProperty : any){
    if(typeof bookProperty == 'string'){
        let b = allbook.filter(a=>a.Author==bookProperty);
        console.log(b);

    }
    else if(typeof bookProperty == 'boolean'){
        let b = allbook.filter(a=>a.Available=bookProperty);
        console.log(b);

    }

}

GetTitle("Author1");
GetTitle(true);