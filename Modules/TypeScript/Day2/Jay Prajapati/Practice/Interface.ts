import {books} from './books';

//Duck Typing
interface Duck{
    walk: () => void,
    swim: () => void,
    quake: () => void
}

let probeblyDuck ={
    walk: () =>console.log("walk like a duck"),
    swim: () =>console.log("swim like a duck"),
    quake: () =>console.log("quake like a duck")
}

function DuckType(type : Duck){}

DuckType(probeblyDuck);

interface book{
    Id : number;
    Title : string;
    Author : string;
    Pages? : number;
    MarkDameged: damageLogger;
}

probeblyDuck.quake();
probeblyDuck.swim();
probeblyDuck.walk();


let b : book ={
    Id : 1,
    Title : "bookTitle",
    Author : "Author1",
    MarkDameged: (reason : string) => console.log("Damaged : " + reason)
}

//interface for functio type
interface damageLogger{
    (reaston : string) : void;
}
b.MarkDameged("Missing front Cover");


// exted Interface 

interface LibraryResource{
    CatalogNumber : number;
}
interface book1{
    title : string;
}

interface Encyclopedia extends LibraryResource, book1{
    volume : number;
}

let newbook : Encyclopedia = {
    CatalogNumber : 123,
    title : "Jungle book",
    volume : 34033
}
console.log(newbook);

//interface for class type

interface Librarian{
    DoWork:()=>void;
}
class Lib implements Librarian{
    DoWork(){  
        console.log("Reading books");
    }
}


class ReferenceItem{
    private _publisher:string;
    title : string;
    year : number;
    constructor(title: string , year : number){
        console.log("Instance of ReferenceItem is created....");
        this.title = title;
        this.year = year;
    }
    get publisher():string{
        return this._publisher.toUpperCase();
    }
    set publisher(p : string){
        this._publisher = p;
    }
}

let r : ReferenceItem = new ReferenceItem("Hello World", 2021);


// Inheritence
class Jurnol extends ReferenceItem{
    constructor(){
        super("Learn C#",2012);
    }

}
let j: Jurnol = new Jurnol();