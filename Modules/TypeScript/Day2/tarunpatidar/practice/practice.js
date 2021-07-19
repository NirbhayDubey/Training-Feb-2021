"use strict";
// Class Example
exports.__esModule = true;
exports.Color = exports.book = void 0;
var book = /** @class */ (function () {
    function book(id, name, author) {
        this.id = id;
        this.name = name;
        this.author = author;
    }
    book.prototype.display = function () {
        return "ID is " + this.id + " Name " + this.name + " Author is " + this.author;
    };
    return book;
}());
exports.book = book;
var bk = new book(1, "C", "Authorname");
var bk1 = new book(2, "abc", "ab");
var bookarray = [];
bookarray.push(bk);
bookarray.push(bk1);
for (var _i = 0, bookarray_1 = bookarray; _i < bookarray_1.length; _i++) {
    var obj = bookarray_1[_i];
    console.log(obj.display());
}
var Employee1 = /** @class */ (function () {
    function Employee1(code, name) {
        this.empCode = code;
        this.name = name;
    }
    Employee1.prototype.getSalary = function (empCode) {
        return 20000;
    };
    return Employee1;
}());
var emp1 = new Employee1(1, "Steve");
console.log(emp1.getSalary(20000));
;
function addKeyValue(Key, Value) {
    console.log('addKeyValue: Key = ' + Key + ', Value = ' + Value);
}
var Kvp = addKeyValue;
Kvp(1, "Bill");
var numArr = [1, 2, 3];
numArr[0];
numArr[1];
console.log(numArr[0], numArr[1]);
// Enum Example
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color = exports.Color || (exports.Color = {}));
;
console.log(Color.Blue);
// Funcation Example
function add(a, b) {
    return a + b;
}
var sum = function (a, b) {
    return a + b;
};
