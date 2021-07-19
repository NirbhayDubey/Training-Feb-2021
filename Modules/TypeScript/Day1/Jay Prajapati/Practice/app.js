var HelloWord = /** @class */ (function () {
    function HelloWord(message) {
        this.message = message;
    }
    return HelloWord;
}());
var hello = new HelloWord("hello TypeScript");
console.log(hello.message);
function ScopeTest() {
    if (true) {
        var v = "Use Anywhere";
        var l = "Use only in block";
    }
    console.log(v);
    //console.log(l);
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
function LogFirstAvailable(books) {
    var numberOfBooks = books.length;
    var firstAvailable = '';
    for (var _i = 0, books_1 = books; _i < books_1.length; _i++) {
        var currentbook = books_1[_i];
        if (books.Available) {
            firstAvailable = currentbook.title;
            break;
        }
    }
    console.log("Total Books : " + numberOfBooks);
    console.log("First Available :  " + firstAvailable);
}
var getBooks = GetAllBook();
console.log(getBooks);
LogFirstAvailable(getBooks);
//Enum
var Days;
(function (Days) {
    Days[Days["Sunday"] = 0] = "Sunday";
    Days[Days["Monday"] = 1] = "Monday";
    Days[Days["Tuesday"] = 2] = "Tuesday";
})(Days || (Days = {}));
;
var Days1;
(function (Days1) {
    Days1[Days1["Sunday"] = 1] = "Sunday";
    Days1[Days1["Monday"] = 2] = "Monday";
    Days1[Days1["Tuesday"] = 3] = "Tuesday";
})(Days1 || (Days1 = {}));
;
var Myday = Days.Monday;
console.log(Myday);
var myTuple = [true, "jay"];
