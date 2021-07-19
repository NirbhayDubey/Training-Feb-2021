"use strict";
exports.__esModule = true;
var message = 'Hello World';
var mess = 'Welcome Back';
console.log(message);
var x = 10;
var y = 20;
var sum;
var title = 'TypeScript';
var isBeginner = true;
var total = 0;
var name = 'jay';
//name = true;
//multiple line with embeded expression
//templet string
var st = "My name is " + name + "\nI am a beginner in TypeScript";
console.log(st);
var n = null;
var u = undefined;
var isNew = null;
var myName = undefined;
// array
var list1 = [1, 2, 4];
var list2 = [1, 2, 3];
var person1 = ['jay', 22];
var Color;
(function (Color) {
    Color[Color["red"] = 5] = "red";
    Color[Color["green"] = 6] = "green";
    Color[Color["blue"] = 7] = "blue";
})(Color || (Color = {}));
;
var c = Color.green;
console.log(c);
// any type
var randomValue = 10;
randomValue = true;
randomValue = "TypeScript";
var myVariable = 10;
console.log(myVariable.name);
myVariable.toUpperCase();
