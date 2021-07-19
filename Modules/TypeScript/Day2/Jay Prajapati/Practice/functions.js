function greeter(fn) {
    fn("Hello, World");
}
function printToConsole(s) {
    console.log(s);
}
greeter(printToConsole);
function doSomething(fn) {
    console.log(fn.description + " returned " + fn(6));
}
function GetAllBook() {
    var books = [
        { title: "Book1", Author: "Author1", Available: true },
        { title: "Book2", Author: "Author2", Available: false },
        { title: "Book3", Author: "Author3", Available: true },
        { title: "Book4", Author: "Author4", Available: false }
    ];
    return books;
}
var allbook = GetAllBook();
var v = allbook.forEach(function (val, index, arr) { return console.log(++index + " - " + val.title); });
function publicationMessage(year) {
    return "Published year : " + year;
}
var fun;
fun = publicationMessage;
var message = fun(2020);
//Optional parameter
function CreateCustomer(name, Age) {
    return name + Age;
}
console.log(CreateCustomer("Jay", 23));
console.log(CreateCustomer("John"));
//Default Parameter
function CreateCust(name, work) {
    if (work === void 0) { work = 'Worker'; }
    return name + "  " + work;
}
console.log(CreateCust("John"));
// Rest Parameters
function createBook(name) {
    var id = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        id[_i - 1] = arguments[_i];
    }
    var s = id.join(',');
    //let v = id.forEach((val,index,arr)=>(++index+ " "+val.valueOf() ));
    return name + " " + s;
}
console.log(createBook("book1", 1, 2, 3, 4, 5, 6, 7, 8));
function GetTitle(bookProperty) {
    if (typeof bookProperty == 'string') {
        var b = allbook.filter(function (a) { return a.Author == bookProperty; });
        console.log(b);
    }
    else if (typeof bookProperty == 'boolean') {
        var b = allbook.filter(function (a) { return a.Available = bookProperty; });
        console.log(b);
    }
}
GetTitle("Author1");
GetTitle(true);
