class HelloWord{
    constructor(public message:string ){}
}
var hello = new HelloWord("hello TypeScript");
console.log(hello.message);

function ScopeTest(){
    if(true){
        var v ="Use Anywhere";
        let l = "Use only in block";
    }
    console.log(v);
    //console.log(l);

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

function LogFirstAvailable(books){
    var numberOfBooks = books.length;
    var firstAvailable = '';
    for (let currentbook of books) {
        
        if(currentbook.Available){
            firstAvailable = currentbook.title;
            break;
        }

    }

    console.log(`Total Books : ${numberOfBooks}`);
    console.log(`First Available :  ${firstAvailable}`);
}
const getBooks = GetAllBook();
console.log(getBooks);
LogFirstAvailable(getBooks);


//Enum

enum Days {Sunday,Monday,Tuesday};
enum Days1 {Sunday=1,Monday,Tuesday};

let Myday:Days = Days.Monday;
console.log(Myday);

let myTuple :[boolean,string] =[true,"jay"];